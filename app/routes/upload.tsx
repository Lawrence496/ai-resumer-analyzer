import React from 'react' 
import { useState } from 'react'
import Navbar from '~/components/Navbar'
import FileUploader from '~/components/FileUploader'

const upload = () => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [statusText, setStatusText] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    }

    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-no-repeat bg-cover min-h-screen">
            <Navbar />
            <section className="main-section">
                <div className="page-heading">
                    <h1>Smart Feedback for your dream job!</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" alt="" className="w-full" />
                        </>
                    ) : (
                        <h2>Drop a resume for an ATS score</h2>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flec-col gap-4 mt-8'>
                            <div className='form-div'>
                                <label htmlFor="company-name">Company Name</label>
                                <input type="text" id="company-name" name="company-name" required />
                            </div>

                            <div className='form-div'>
                                <label htmlFor="job-title">Job Title</label>
                                <input type="text" id="job-title" name="job-title" required />
                            </div>

                            <div className='form-div'>
                                <label htmlFor="job-description">Job Description</label>
                                <textarea rows={10} id="job-description" name="job-description" required />
                            </div>

                            <div className='form-div'>
                                <label htmlFor="resume">Upload Resume</label>
                                <div><FileUploader onFileSelect={handleFileSelect} /></div>
                            </div>

                            <button type="submit" className='primary-button'>Submit</button>
                        </form>
                    )}
                </div>
            </section>
        </main>
  )
}

export default upload