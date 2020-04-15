using System;
using WebApi.Models;

namespace WebApi.DTO
{
    public class AdicionarPessoaDTO
    {
        public string Nome { get; set; }
        public string CPF { get; set; }
        public DateTime DataNascimento { get; set; }
        public UF UF { get; set; }
    }
}