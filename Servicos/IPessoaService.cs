using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.DTO;
using WebApi.Models;

namespace WebApi.Servicos
{
    public interface IPessoaService
    {
        Task<List<Pessoa>> BuscarTodos();
        Task<Pessoa> BuscarPorId(int id);
        Task<List<Pessoa>> BuscarPorUF(UF uf);
        Task<Pessoa> AdicionarPessoa(AdicionarPessoaDTO novaPessoaDTO);
        Task<Pessoa> AtualizarPessoa(AtualizarPessoaDTO AtualizarPessoa);
        Task<List<Pessoa>> RemoverPessoa(int id);
    }
}