import { RouterLink } from "@angular/router";

export interface IProduto {
  id: number;
  descricao: string;
  preco: number;
  descricaoPreco: string;
  imagem: string;
  lk:string;
}
export interface IProdutoCarrinho extends IProduto{
  quantidade: number;
}

export const produtos= [
  { id: 1, descricao: "Mini processador", preco: 439.00, descricaoPreco: "À vista ", imagem: "/assets/mouse-3.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista ",imagem: "/assets/monitor-1.jpg", lk:"https://www.youtube.com/watch?v=h5y9yTMGuSA" },
  { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista ", imagem: "/assets/teclado-1.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s" },
  { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista ", imagem: "/assets/fone-de-ouvido-2.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 5, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista ", imagem: "/assets/fone-de-ouvido-1.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s" },
  { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista", imagem: "/assets/fone-de-ouvido-3.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista", imagem: "/assets/hd.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista", imagem: "/assets/placa-video.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s" },
  { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista", imagem: "/assets/processador.jpg",lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista", imagem: "/assets/laptop-1.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista", imagem: "/assets/laptop-2.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista ", imagem: "/assets/mouse-1.png", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 13, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista", imagem: "/assets/mouse-2.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista", imagem: "/assets/mouse-4.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"},
  { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista ", imagem: "/assets/teclado-2.jpg", lk:"https://www.youtube.com/watch?v=S604zi03cPU&t=251s"}
]
