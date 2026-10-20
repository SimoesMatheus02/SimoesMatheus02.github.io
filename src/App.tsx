import { Header } from './components/Header'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8">Projetos:</h1>
      <div id="Projetos" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="ExerciciosDB" className="text-center max-w-xl ml-8 mt-6">
        <h2 className="text-2xl font-bold text-blue-500">Exercícios DB</h2>
        <p>Banco de dados com exercícios catalogados por filtros, contendo uma animação 3D para visualização da execução do exercício. Pode ser usado com um app de montar treino</p>
        <p><a href="https://exercicios-db-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline font-medium">https://exercicios-db-two.vercel.app/</a></p>
          <div className="mt-4 border border-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://exercicios-db-two.vercel.app/"
              className="w-full h-96"
              title="Exercícios DB Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
