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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {label && (
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#BEBEBE', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                objectFit: 'cover',
                border: '1px solid rgba(19, 155, 253, 0.4)',
                boxShadow: '0 0 10px rgba(19, 155, 253, 0.2)',
                flexShrink: 0,
              }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'rgba(19, 155, 253, 0.15)',
                border: '1px solid rgba(19, 155, 253, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#13FDFD',
                fontSize: '16px',
                flexShrink: 0,
              }}
            >
              📄
            </div>
          )
        ) : (
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: '#081722',
              border: '1px dashed #0C1F2E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#65676B',
              fontSize: '13px',
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
            padding: '7px 14px',
            borderRadius: '6px',
            backgroundColor: 'rgba(19, 155, 253, 0.12)',
            color: '#FFFFFF',
            border: '1px solid rgba(19, 155, 253, 0.35)',
            fontSize: '12px',
            fontWeight: 600,
            cursor: isUploading ? 'not-allowed' : 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!isUploading) {
              e.currentTarget.style.backgroundColor = 'rgba(19, 155, 253, 0.25)';
              e.currentTarget.style.borderColor = '#13FDFD';
            }
          }}
          onMouseLeave={(e) => {
            if (!isUploading) {
              e.currentTarget.style.backgroundColor = 'rgba(19, 155, 253, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(19, 155, 253, 0.35)';
            }
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
            background: '#081722',
            border: '1px solid #0C1F2E',
            color: '#BEBEBE',
            padding: '7px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#139BFD')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#0C1F2E')}
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
              color: '#FF494A',
              cursor: 'pointer',
              fontSize: '13px',
              padding: '6px',
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
            padding: '8px 12px',
            backgroundColor: '#081722',
            border: '1px solid #0C1F2E',
            borderRadius: '6px',
            color: '#FFFFFF',
            fontSize: '12px',
            marginTop: '4px',
            outline: 'none',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#139BFD')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#0C1F2E')}
        />
      )}
    </div>
  );
}
