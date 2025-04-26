/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { GithubUser } from "./models/github-user.model";
import GithubMarkLight from "./assets/github-mark.svg";
import GithubMark from "./assets/github-mark-white.svg";
import SearchIcon from "./assets/search.svg";
import Ellipse1 from "./assets/Ellipse1.svg";
import Ellipse2 from "./assets/Ellipse2.svg";
import { FiSun, FiMoon } from "react-icons/fi";
import Camada_1 from "./assets/Camada_1.png";

const App: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isDark, setIsDark] = useState(true);

  const toggleMode = () => setIsDark(!isDark);

  const handleSearch = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setError(false);
    setUserData(null);
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error(
          "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente."
        );
      }

      const data = (await response.json()) as GithubUser;
      setUserData(data);
    } catch (err: unknown) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fundo da página */}
      <div
        className={`relative ${
          isDark ? "bg-zinc-900" : "bg-gray-200"
        } min-h-screen w-full flex items-center justify-center py-10 px-4 transition-colors duration-500 overflow-hidden`}
      >
        {/* Ellipses decorativas */}
        <img
          src={Ellipse1}
          alt="Decorativo"
          className="absolute top-0 right-0 w-48 md:w-64 pointer-events-none select-none"
        />
        <img
          src={Ellipse2}
          alt="Decorativo"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 md:w-64 pointer-events-none select-none"
        />

        {/* Camada decorativa */}
          <img
            src={Camada_1}
            alt="Camada decorativa"
            className="absolute top-40 left-70 transform -translate-x-1/2 -translate-y-1/2 w-40 md:w-52 pointer-events-none select-none"
          />
        {/* Container central */}
        <main
          className={`relative w-full max-w-4xl ${
            isDark ? "bg-black" : "bg-white"
          } rounded-none shadow-2xl flex flex-col items-center justify-start py-10 px-6 gap-10 transition-all duration-500`}
        >
          {/* Botão Dark/Light com ícone */}
          <button
            onClick={toggleMode}
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full 
              bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Alternar modo escuro/claro"
          >
            {isDark ? (
              <>
                <FiSun size={24} />
                Light Mode
              </>
            ) : (
              <>
                <FiMoon size={24} />
                Dark Mode
              </>
            )}
          </button>

          <header className="text-center flex justify-between items-center gap-6 max-sm:flex-col">
            <div className="flex items-center gap-6">
              <img
                src={isDark ? GithubMark : GithubMarkLight}
                alt="GitHub Mark"
                className="w-20"
              />
              <h1
                className={`text-5xl max-sm:text-4xl font-bold ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Perfil <strong>GitHub</strong>
              </h1>
            </div>
          </header>

          <div className="w-full mx-auto flex flex-col items-center">
            <div className="relative w-full max-w-3xl">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Digite um usuário do Github"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white dark:bg-white p-5 placeholder-black dark:placeholder-white 
                            rounded-2xl text-2xl text-black dark:text-black
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            shadow-sm transition-all duration-300"
                  aria-label="Campo de busca do usuário"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 my-auto bg-blue-600 hover:bg-blue-700
                            text-white rounded-2xl px-4 transition-all duration-300
                            focus:outline-none shadow-md cursor-pointer"
                  aria-label="Buscar usuário"
                >
                  <img src={SearchIcon} alt="Pesquisar" className="w-10" />
                </button>
              </form>
            </div>
          </div>

          {error && (
            <div
              className="p-4 rounded-2xl text-red-500 text-center text-2xl max-w-4xl w-full bg-white dark:bg-zinc-700"
            >
              <p>Nenhum perfil foi encontrado com esse nome de usuário.</p>
              <p>Tente novamente.</p>
            </div>
          )}

          {loading && (
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-2 text-blue-500 font-medium">Carregando...</span>
            </div>
          )}

          {userData && !loading && (
            <div className="bg-gray-100 rounded-3xl flex items-center justify-between gap-8 py-4 px-8 w-full max-sm:flex-col">
              <img
                src={userData.avatar_url}
                alt="Foto de Perfil"
                className="w-64 rounded-full shadow-md border-4 border-blue-600"
              />
              <div className="max-w-2xl flex flex-col gap-4 max-sm:items-center">
                <h2 className="text-2xl text-blue-600">
                  {userData.name ? userData.name : "Nome não disponível"}
                </h2>
                <p className="text-black">
                  {userData.bio ? userData.bio : "Bio não disponível"}
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default App;
