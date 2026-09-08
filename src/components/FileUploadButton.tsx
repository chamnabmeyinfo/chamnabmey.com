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
  helperText,
}: FileUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Size limit check (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit. Please choose a smaller file.');
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // 1. Instant client-side fallback via FileReader
      const reader = new FileReader();
      reader.onload = () => {
        const clientDataUrl = reader.result as string;
        onUpload(clientDataUrl);
      };
      reader.readAsDataURL(file);

      // 2. Upload to server route
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        if (data.url || data.dataUrl) {
          onUpload(data.url || data.dataUrl);
        }
      }
    } catch (err: any) {
      console.warn('Upload API notice (using client Data URL):', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleClear = () => {
    onUpload('');
  };

  const defaultButtonText = buttonText || (fileType === 'image' ? 'Upload Image' : 'Upload File / PDF');

  return (
    <div style={{ marginBottom: '14px', fontFamily: "'Montserrat', sans-serif" }}>
      {label && (
        <label style={{ display: 'block', fontSize: '13px', color: '#A0AEC0', marginBottom: '6px', fontWeight: 600 }}>
          {label}
        </label>
      )}

      {/* Hidden native input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Upload Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        {/* Upload Action Button */}
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={isUploading}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 18px',
            borderRadius: '10px',
            backgroundColor: '#139BFD',
            color: '#FFFFFF',
            border: 'none',
            fontWeight: 700,
            fontSize: '13px',
            cursor: isUploading ? 'not-allowed' : 'pointer',
            opacity: isUploading ? 0.7 : 1,
            boxShadow: '0 4px 15px rgba(19, 155, 253, 0.3)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            if (!isUploading) e.currentTarget.style.backgroundColor = '#42AFFD';
          }}
          onMouseLeave={(e) => {
            if (!isUploading) e.currentTarget.style.backgroundColor = '#139BFD';
          }}
        >
          {isUploading ? (
            <>
              <i className="fa-solid fa-spinner fa-spin"></i>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <i className={fileType === 'image' ? 'fa-solid fa-image' : 'fa-solid fa-cloud-arrow-up'}></i>
              <span>{defaultButtonText}</span>
            </>
          )}
        </button>

        {/* Toggle Manual URL button */}
        <button
          type="button"
          onClick={() => setShowManualInput(!showManualInput)}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#A0AEC0',
            padding: '9px 14px',
            borderRadius: '10px',
            fontSize: '12px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {showManualInput ? 'Hide URL Input' : 'Or Paste URL'}
        </button>

        {/* Clear Button if value exists */}
        {currentValue && (
          <button
            type="button"
            onClick={handleClear}
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#F87171',
              padding: '9px 14px',
              borderRadius: '10px',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Error display */}
      {error && (
        <div style={{ color: '#F87171', fontSize: '12px', marginTop: '6px' }}>
          {error}
        </div>
      )}

      {/* Preview Section */}
      {currentValue && (
        <div
          style={{
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 14px',
            borderRadius: '10px',
            backgroundColor: '#06131B',
            border: '1px solid #1A365D',
          }}
        >
          {fileType === 'image' ? (
            <img
              src={currentValue}
              alt="Preview"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                objectFit: 'cover',
                border: '1px solid rgba(19, 155, 253, 0.4)',
              }}
              onError={(e) => {
                // In case image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                backgroundColor: 'rgba(19, 155, 253, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#42AFFD',
                fontSize: '20px',
              }}
            >
              <i className="fa-solid fa-file-pdf"></i>
            </div>
          )}

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '11px', color: '#00E676', fontWeight: 700 }}>
              ✓ File Attached & Ready
            </div>
            <div
              style={{
                fontSize: '12px',
                color: '#BEBEBE',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '400px',
              }}
              title={currentValue}
            >
              {currentValue.startsWith('data:') ? 'Embedded Base64 File Data' : currentValue}
            </div>
          </div>
        </div>
      )}

      {/* Optional Manual URL Input */}
      {showManualInput && (
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            placeholder={fileType === 'image' ? 'https://example.com/image.jpg' : '/Resume-CHAMNAB-MEY.pdf'}
            value={currentValue}
            onChange={(e) => onUpload(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              backgroundColor: '#0B1D28',
              border: '1px solid #1A365D',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '13px',
            }}
          />
        </div>
      )}

      {helperText && (
        <div style={{ fontSize: '11px', color: '#718096', marginTop: '4px' }}>
          {helperText}
        </div>
      )}
    </div>
  );
}
