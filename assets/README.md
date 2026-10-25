# Assets

Tudo que aparece nos slides e não é texto mora aqui. **Nada é carregado da internet** durante a apresentação: se um arquivo não está nesta pasta, ele não existe para o deck.

## Estrutura

```
assets/
└── qrcodes/    QR codes do slide de agradecimento (PNG)
```

## Inventário

| Arquivo | Uso | Destino |
| --- | --- | --- |
| `qrcodes/qr-theproductpath.png` | Agradecimento dos dois dias | onproductpath.substack.com |
| `qrcodes/qr-vinanews.png` | Agradecimento dos dois dias | vinanews.com.br |
| `qrcodes/qr-work-in-tech.png` | Agradecimento dos dois dias | github.com/guilhermenstorti/work-in-tech |

## Convenções para novos arquivos

- **Nomes:** minúsculas, sem acento, palavras separadas por hífen, com o contexto antes: `logo-evento.svg`, `qr-site.png`.
- **Formatos:** SVG para logos e ícones; WebP (preferido) ou PNG para fotos, prints e QR codes.
- **Tamanho:** até 2560 px no maior lado e ~500 KB. O telão não mostra mais que isso.
- **QR codes:** módulos escuros sobre fundo branco, com margem branca no próprio arquivo. No slide, use `.qr__code.qr__code--png`, que funciona nos dois temas.
- **Uso nos decks:** caminho relativo ao `index.html` do deck, por exemplo `../../assets/qrcodes/qr-vinanews.png`. O Vite empacota o arquivo no build.

Ao adicionar um arquivo, atualize esta tabela.
