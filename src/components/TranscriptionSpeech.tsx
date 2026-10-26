import { useState } from 'react'

export function TranscriptionSpeech() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [transcriptionResult, setTranscriptionResult] = useState('')
  const [textToConvert, setTextToConvert] = useState('')
  const [audioResult, setAudioResult] = useState<string | null>(null)
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const API_URL = 'https://transcription-and-speech-api.onrender.com'

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAudioFile(e.target.files[0])
      setError('')
    }
  }

  const handleTranscribe = async () => {
    if (!audioFile) {
      setError('Please select an audio file')
      return
    }

    setLoading(true)
    setError('')
    setTranscriptionResult('')

    try {
      const formData = new FormData()
      formData.append('file', audioFile)

      const response = await fetch(`${API_URL}/api/transcribe`, {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Transcription failed: ${response.status} ${await response.text()}`)
      }

      const transcription = await response.text()
      setTranscriptionResult(transcription || 'Transcription completed')
    } catch (err) {
      setError('Failed to transcribe audio. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleTextToSpeech = async () => {
    if (!textToConvert.trim()) {
      setError('Please enter text to convert')
      return
    }

    setLoading(true)
    setError('')
    setAudioResult(null)

    try {
      const response = await fetch(`${API_URL}/sinthesize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
                },
        body: JSON.stringify({ text: textToConvert }),
    })

    if (!response.ok) {
      throw new Error(`Text-to-speech failed: ${response.status} ${await response.text()}`)
    }

    const blob = await response.blob()
    const audioUrl = URL.createObjectURL(blob)
    setAudioResult(audioUrl)
    setAudioBlob(blob)
    } catch (err) {
      setError('Failed to convert text to audio. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Audio to Text Section */}
      <div className="p-6 border border-gray-300 rounded-lg">
        <h3 className="text-xl font-bold text-blue-500 mb-4">Audio to Text Transcription</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Upload Audio File</label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleAudioUpload}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {audioFile && (
            <p className="text-sm text-gray-600">Selected: {audioFile.name}</p>
          )}
          <button
            onClick={handleTranscribe}
            disabled={loading || !audioFile}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Transcribing...' : 'Transcribe Audio'}
          </button>
          {transcriptionResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h4 className="font-semibold mb-2">Transcription Result:</h4>
              <p className="whitespace-pre-wrap">{transcriptionResult}</p>
            </div>
          )}
        </div>
      </div>

      {/* Text to Audio Section */}
      <div className="p-6 border border-gray-300 rounded-lg">
        <h3 className="text-xl font-bold text-blue-500 mb-4">Text to Speech</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter Text</label>
            <textarea
              value={textToConvert}
              onChange={(e) => setTextToConvert(e.target.value)}
              placeholder="Enter text to convert to speech..."
              className="w-full p-2 border border-gray-300 rounded h-32"
            />
          </div>
          <button
            onClick={handleTextToSpeech}
            disabled={loading || !textToConvert.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Converting...' : 'Convert to Audio'}
          </button>
          {audioResult && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h4 className="font-semibold mb-2">Generated Audio:</h4>
              <audio controls src={audioResult} className="w-full mb-4" />
              {audioBlob && (
                <button
                  onClick={() => {
                    const url = URL.createObjectURL(audioBlob)
                    const a = document.createElement('a')
                    a.href = url
                    a.download = 'generated-audio.mp3'
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                    URL.revokeObjectURL(url)
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Download Audio
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
    </div>
  )
}
