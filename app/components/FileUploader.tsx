import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { useState } from 'react'

interface FileUploaderProps {
    onFileSelect: (file: File | null) => void;
}

const FileUploader = ({ onFileSelect } : FileUploaderProps ) => {
    const [file, setFile] = useState()

    const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0] || null;
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
            'application/msword': ['.doc'],
        },
        maxFiles: 1,
        maxSize: 20 * 1024 * 1024,
        onError: (error) => {
            console.error(error)
        },
    })

    return (
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto w-16 h-16 flex itema-center justify-center">
                       <img src="/icons/info.svg" alt="upload-image" className='size-20'/>
                    </div>

                    {file ? (
                        <div>

                        </div>
                    ):(
                        <div>
                            <p className="text-lg text-gray-500">
                                <span className="font-semibold">
                                    Click to upload 
                                    <span className="text-gradient">or Drag and drop a PDF, DOCX, or DOC</span>
                                </span>
                            </p>
                            <p className="text-sm text-gray-500">
                                Supported file types: PDF, DOCX, DOC (max 10MB)
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FileUploader