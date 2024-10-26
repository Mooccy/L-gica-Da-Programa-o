programa {
  funcao inicio() {
    real n1, n2, resu
    caracter ope

    escreva("Digite o primeiro número: ")
    leia(n1)

    escreva("Digite o segundo número: ")
    leia(n2)

    escreva("Escolha a operação: ")
    leia(ope)

    se (ope == "+")
    {
      resu = n1 + n2
    }
    senao se(ope == "-")
    {
      resu = n1 - n2
    }
    senao se(ope == "*")
    {
      resu = n1 * n2
    }
    senao se(ope == "/")
    {
      resu = n1 / n2
    }

    escreva("O resultado é: ", resu)

  }
}
