// Inicialização do particles.js com as configurações definidas
particlesJS('particles-js', {
  // Configurações das partículas
  "particles": {
    "number": {
      "value": 80, // Número de partículas
      "density": {
        "enable": true, // Habilita a densidade
        "value_area": 800 // Define a área de densidade
      }
    },
    "color": {
      "value": "#000000" // Cor das partículas
       // Cor das partículas
    },
    // Forma das partículas
    "shape": {
      "type": "circle", // Tipo de forma (neste caso, circle) (outras configurações específicas da forma edge,triangle,polygon,star,image,)
      "stroke": {
        "width": 1, // Largura da borda da forma
        "color": "#ffffff" // Cor da borda
      },
      "polygon": {
        "nb_sides": 5 // Número de lados do polígono
      },
      "image": {
        "src": "img/github.svg", // Caminho da imagem (opcional)
        "width": 100, // Largura da imagem (opcional)
        "height": 100 // Altura da imagem (opcional)
      }
    },
    // Opacidade das partículas
    "opacity": {
      "value": 0.5, // Valor da opacidade
      "random": false, // Opacidade aleatória (desabilitada)
      "anim": {
        "enable": false, // Animação de opacidade (desabilitada)
        "speed": 1, // Velocidade da animação
        "opacity_min": 0.1, // Valor mínimo de opacidade
        "sync": false // Sincronização de animação (desabilitada)
      }
    },
    // Tamanho das partículas
    "size": {
      "value": 5, // Tamanho das partículas
      "random": true, // Tamanho aleatório (habilitado)
      "anim": {
        "enable": false, // Animação de tamanho (desabilitada)
        "speed": 40, // Velocidade da animação
        "size_min": 0.1, // Tamanho mínimo
        "sync": false // Sincronização de animação (desabilitada)
      }
    },
    // Conexões entre as partículas
    "line_linked": {
      "enable": true, // Habilita as conexões
      "distance": 250, // Distância das conexões
      "color": "#ffffff", // Cor das conexões
      "opacity": 0.4, // Opacidade das conexões
      "width": 1 // Largura das conexões
    },
    // Movimento das partículas
    "move": {
      "enable": true, // Habilita o movimento das partículas
      "speed": 6, // Velocidade do movimento das partículas
      "direction": "none", // Direção do movimento
      "random": false, // Movimento aleatório (desabilitado)
      "straight": false, // Movimento em linha reta (desabilitado)
      "out_mode": "out", // Comportamento quando atinge os limites
      "attract": {
        "enable": false, // Atração entre partículas (desabilitada)
        "rotateX": 600, // Rotação em graus no eixo X
        "rotateY": 1200 // Rotação em graus no eixo Y
      }
    }
  },
  
  // Interações com o mouse
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      // Ao passar o mouse sobre as partículas
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      // Ao clicar nas partículas
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      // Redimensionar a tela
      "resize": true
    },
    // Modos de interação
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  
  // Detecção de retina (alta resolução)
  "retina_detect": true,
  
  // Configurações de demonstração (pode ser removido em produção)
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});
