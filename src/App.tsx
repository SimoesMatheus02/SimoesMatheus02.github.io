import { Header } from './components/Header'
import { Certificate } from './components/Certificate'
import certificateImage from './assets/DIO-GFT-JAVA.png'
import itauCertificateImage from './assets/DIO-ITAU-JAVA.png'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <div id="Experience" className="max-w-2xl mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center">Experiência:</h1>
        <div className="mt-6 p-6 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-500">Desenvolvedor Fullstack Jr</h2>
          <p className="text-gray-600 mt-1">ClearCloudSoftware – Santos, SP | Julho 2022 – Agosto 2023</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-left">
            <li>Desenvolvimento de sites do zero, manutenção e implementação</li>
            <li>Desenvolvimento e manutenção de aplicativos Android usando React Native</li>
            <li>Desenvolvimento e consumo de APIs RESTful usando Ruby on Rails</li>
            <li>Atuação em equipe de acordo com a metodologia Kanban</li>
            <li>Deploy de sites e banco de dados utilizando HEROKU, SUPABASE, VERCEL</li>
            <li>Desenvolvimento e manutenção de sistema de notificações para o site FOMO.com usando Javascript, Jquery</li>
          </ul>
        </div>
      </div>
      <div id="Projects" className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2">
        <h1 className="text-4xl font-bold text-center mt-8 col-span-full">Projetos:</h1>
        <div id="ExerciciosDB" className="p-6 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-500">Exercícios DB</h2>
        <p>Banco de dados com exercícios catalogados por filtros, contendo uma animação 3D para visualização da execução do exercício. Pode ser usado com um app de montar treino</p>
        <p><a href="https://exercicios-db-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">https://exercicios-db-two.vercel.app/</a></p>
          <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://exercicios-db-two.vercel.app/"
              className="w-full h-auto"
              title="Exercícios DB Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div id="Certificates" className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mx-2">
        <h1 className="text-4xl font-bold text-center col-span-full">Certificados e Cursos:</h1>
        <Certificate
          title="GFT Start #4 Java - DIO"
          description="Certificado de conclusão do curso de Java"
          image={certificateImage}
          pdfUrl="/DIO-GFT-JAVA.pdf"
          alt="GFT Java Certificate"
        />
        <Certificate
          title="Itau Java com I.A. - DIO"
          description="Certificado de conclusão do curso de Java"
          image={itauCertificateImage}
          pdfUrl="/DIO--ITAU-JAVA.pdf"
          alt="Itau Java Certificate"
        />
      </div>
    </div>
  )
}

export default App
