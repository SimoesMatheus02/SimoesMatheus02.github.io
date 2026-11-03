import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Certificate } from './Certificate'

describe('Certificate Component', () => {
  const mockProps = {
    title: 'GFT Start #4 Java - DIO',
    description: 'Certificado de conclusão do curso de Java',
    image: '/test-image.png',
    pdfUrl: '/test-certificate.pdf',
    alt: 'GFT Java Certificate',
  }

  it('renders the certificate with all props', () => {
    render(<Certificate {...mockProps} />)

    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })

  it('renders the image with correct src and alt attributes', () => {
    render(<Certificate {...mockProps} />)

    const image = screen.getByAltText(mockProps.alt)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', mockProps.image)
  })

  it('renders the PDF link with correct href', () => {
    render(<Certificate {...mockProps} />)

    const link = screen.getByText('Visualizar PDF')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', mockProps.pdfUrl)
  })

  it('opens PDF link in new tab with security attributes', () => {
    render(<Certificate {...mockProps} />)

    const link = screen.getByText('Visualizar PDF')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('applies correct styling classes', () => {
    const { container } = render(<Certificate {...mockProps} />)

    const card = container.firstChild as HTMLElement
    expect(card).toHaveClass('p-6', 'border', 'border-gray-300', 'rounded-lg')
  })
})
