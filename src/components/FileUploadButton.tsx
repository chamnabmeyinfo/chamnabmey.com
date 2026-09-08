"use client";

import React, { useRef, useState } from 'react';

interface FileUploadButtonProps {
  label?: string;
  currentValue: string;
  onUpload: (url: string) => void;
  accept?: string;
  fileType?: 'image' | 'file';
  buttonText?: string;
  helperText?: string;
}

export default function FileUploadButton({
  label,
  currentValue,
  onUpload,
  accept = 'image/*',
  fileType = 'image',
  buttonText,
}: FileUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // Immediate local client Data URL
      const reader = new FileReader();
      reader.onload = () => {
        onUpload(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Server upload
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        if (data.url || data.dataUrl) {
          onUpload(data.url || data.dataUrl);
        }
      }
    } catch (err) {
      console.warn('Upload notice:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {label && (
        <span style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.3px' }}>
          {label}
        </span>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Preview thumbnail / icon */}
        {currentValue ? (
          fileType === 'image' ? (
            <img
              src={currentValue}
              alt="Preview"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                objectFit: 'cover',
                border: '1px solid #1E293B',
                flexShrink: 0,
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '6px',
                backgroundColor: 'rgba(19, 155, 253, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#42AFFD',
                fontSize: '14px',
                flexShrink: 0,
              }}
            >
              📄
            </div>
          )
        ) : (
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#0F172A',
              border: '1px dashed #334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748B',
              fontSize: '12px',
              flexShrink: 0,
            }}
          >
            +
          </div>
        )}

        {/* Upload Button */}
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={isUploading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            borderRadius: '6px',
            backgroundColor: '#1E293B',
            color: '#F1F5F9',
            border: '1px solid #334155',
            fontSize: '11px',
            fontWeight: 600,
            cursor: isUploading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {isUploading ? (
            'Uploading...'
          ) : (
            buttonText || (fileType === 'image' ? '📷 Upload' : '📄 Upload PDF')
          )}
        </button>

        {/* URL input toggle */}
        <button
          type="button"
          onClick={() => setShowUrlInput(!showUrlInput)}
          title="Paste direct URL"
          style={{
            background: 'transparent',
            border: '1px solid #334155',
            color: '#94A3B8',
            padding: '5px 8px',
            borderRadius: '6px',
            fontSize: '11px',
            cursor: 'pointer',
          }}
        >
          🔗
        </button>

        {/* Clear Button */}
        {currentValue && (
          <button
            type="button"
            onClick={() => onUpload('')}
            title="Clear"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#EF4444',
              cursor: 'pointer',
              fontSize: '12px',
              padding: '4px',
            }}
          >
            ✕
          </button>
        )}
      </div>

      {showUrlInput && (
        <input
          type="text"
          placeholder="Paste URL..."
          value={currentValue}
          onChange={(e) => onUpload(e.target.value)}
          style={{
            width: '100%',
            padding: '5px 10px',
            backgroundColor: '#0F172A',
            border: '1px solid #1E293B',
            borderRadius: '6px',
            color: '#F1F5F9',
            fontSize: '11px',
            marginTop: '4px',
          }}
        />
      )}
    </div>
  );
}
