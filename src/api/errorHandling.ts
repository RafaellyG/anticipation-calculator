export const errors =
{
  500: 'Oh não, parece que nosso serviço está fora do ar no momento.',
  408: 'Ops! O serviço está demorando muito para responder, tente novamente mais tarde.',
  400: 'Algo errado não está certo, verifique os valores digitados.',
  generic: 'Oh não! Um erro inesperado aconteceu, tente novamente mais tarde',
  internet: 'Parece que sua conexão com a internet está instável nesse momento.',
};

export const handleResponse = (response: any) => {

  if (response.ok) return response;

  if (response.message === 'Failed to fetch') { // user has internet problems
    throw new Error(errors.internet);
  }

  const message = errors[response.status as keyof typeof errors] || errors.generic;
  throw new Error(message);
}