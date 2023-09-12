<script setup>

import HTMLIcon from '/assets/stack/front/html5.svg';
import CSSIcon from '/assets/stack/front/css3.svg';
import BootstrapIcon from '/assets/stack/front/bootstrap5.svg';
import SASSIcon from '/assets/stack/front/sass.svg';
import TailwindIcon from '/assets/stack/front/tailwind.svg';
import IonicIcon from '/assets/stack/front/ionic.svg';
import ReactIcon from '/assets/stack/front/reactjs.svg';
import VueIcon from '/assets/stack/front/vuejs.svg';

const frontend = [
    {
        name: 'HTML',
        img: HTMLIcon
    },
    {
        name: 'CSS',
        img: CSSIcon
    },
    {
        name: 'Bootstrap',
        img: BootstrapIcon
    },
    {
        name: 'SASS',
        img: SASSIcon
    },
    {
        name: 'TailwindCss',
        img: TailwindIcon
    },
    {
        name: 'Ionic',
        img: IonicIcon
    },
    {
        name: 'ReactJs',
        img: ReactIcon
    },
    {
        name: 'VueJs',
        img: VueIcon
    }
]

import MySQLIcon from '/assets/stack/back/mysql.svg';
import NodeJSIcon from '/assets/stack/back/nodejs.svg';
import LaravelIcon from '/assets/stack/back/laravel.svg';
import MongoDBIcon from '/assets/stack/back/mongodb.svg';
import PostgreSQLIcon from '/assets/stack/back/postfresql.svg';
import PostmanIcon from '/assets/stack/back/postman.svg';

const backend = [
    {
        name: 'MySQL',
        img: MySQLIcon
    },
    {
        name: 'NodeJs',
        img: NodeJSIcon
    },
    {
        name: 'Laravel',
        img: LaravelIcon
    },
    {
        name: 'MongoDB',
        img: MongoDBIcon
    },
    {
        name: 'PostgreSQL',
        img: PostgreSQLIcon
    },
    {
        name: 'Postman',
        img: PostmanIcon
    }
]

import JSIcon from '/assets/stack/languages/js.svg';
import TSIcon from '/assets/stack/languages/typescript.svg';
import PHPIcon from '/assets/stack/languages/php.svg';
import PythonIcon from '/assets/stack/languages/python.svg';

const languages = [
    {
        name: 'JavaScript',
        img: JSIcon
    },
    {
        name: 'TypeScript',
        img: TSIcon
    },
    {
        name: 'PHP',
        img: PHPIcon
    },
    {
        name: 'Python',
        img: PythonIcon
    }
]

import AWSIcon from '/assets/stack/dev/aws.svg';
import EC2Icon from '/assets/stack/dev/aws-ec2.svg';
import FirebaseIcon from '/assets/stack/dev/firebase.svg';
import GitIcon from '/assets/stack/dev/git.svg';
import GitHubIcon from '/assets/stack/dev/github.svg';
import GitLabIcon from '/assets/stack/dev/gitlab.svg';
import WordPressIcon from '/assets/stack/dev/wordpress.svg';

const devops = [
    {
        name: 'AWS',
        img: AWSIcon
    },
    {
        name: 'AWS-EC2',
        img: EC2Icon
    },
    {
        name: 'Firebase',
        img: FirebaseIcon
    },
    {
        name: 'Git',
        img: GitIcon
    },
    {
        name: 'GitHub',
        img: GitHubIcon
    },
    {
        name: 'GitLab',
        img: GitLabIcon
    },
    {
        name: 'WordPress',
        img: WordPressIcon
    }
]

const useImage = (url) => {
    return new URL(url, import.meta.url).href
}
</script>

<template>
  <div class="page-container">
      <h1 class="burger-header">THE STACK</h1>
      <div class="burger-container">
          <div class="top-bun">
              <svg xmlns="http://www.w3.org/2000/svg" width="279" height="74" viewBox="0 0 279 74" fill="none">
                  <path d="M277 72H2C2 72 1.99999 2 133.641 2C277 2 277 72 277 72Z" stroke-width="4"/>
                  <circle cx="59.5" cy="34.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="93.5" cy="29.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="117.5" cy="16.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="139.5" cy="31.5" r="2.5" fill="#FAFAFA"/>
                  <path d="M163 19.5C163 20.8807 161.881 22 160.5 22C159.119 22 158 20.8807 158 19.5C158 18.1193 159.119 17 160.5 17C161.881 17 163 18.1193 163 19.5Z" fill="#FAFAFA"/>
                  <circle cx="165.5" cy="39.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="198.5" cy="52.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="187.5" cy="31.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="218.5" cy="24.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="235.5" cy="44.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="144.5" cy="52.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="112.5" cy="44.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="80.5" cy="50.5" r="2.5" fill="#FAFAFA"/>
                  <circle cx="37.5" cy="48.5" r="2.5" fill="#FAFAFA"/>
              </svg>
              <div class="connector-line"></div>
              <div class="tech-stack-card">
                  <h2>FRONTEND</h2>
                  <img v-for="tech in frontend" :alt="tech.name" height="96" width="96" class="tech-icon" :src="tech.img"/>
                  <!-- Stack details here -->
              </div>
          </div>
          <div class="lettuce">
              <svg xmlns="http://www.w3.org/2000/svg" width="352" height="93" viewBox="0 0 352 93" fill="none">
                  <path d="M83.164 91.6119C63.9501 92.7074 63.1802 63.8345 63.1802 63.8345C63.1802 63.8345 -1.26384 55.3825 0.852595 46.4002C2.96903 37.418 61.0862 27.1083 61.0862 27.1083C61.0862 27.1083 59.3114 11.3519 78.3928 7.93194C97.4741 4.51198 140.349 18.8578 140.349 18.8578C140.349 18.8578 171.815 2.13886 195.422 1.25926C219.029 0.379649 246.237 16.5515 246.237 16.5515C246.237 16.5515 273.31 -0.383268 291.015 2.8048C308.721 5.99288 304.674 27.2116 304.674 27.2116C304.674 27.2116 351.757 38.5191 351.387 47.4018C351.017 56.2844 294.249 59.5212 294.249 59.5212C294.249 59.5212 307.616 78.8142 284.035 80.1587C260.455 81.5032 235.735 62.8575 235.735 62.8575C235.735 62.8575 205.752 90.2191 184.818 91.8791C163.884 93.539 148.399 67.8371 148.399 67.8371C148.399 67.8371 102.378 90.5163 83.164 91.6119Z" stroke="#FAFAFA"/>
              </svg>
              <div class="connector-line"></div>
              <div class="tech-stack-card">
                  <h2>BACKEND</h2>
                  <img v-for="tech in backend" :alt="tech.name" height="96" width="96" class="tech-icon" :src="tech.img"/>
                  <!-- Stack details here -->
              </div>
          </div>
          <div class="patty">
              <svg xmlns="http://www.w3.org/2000/svg" width="287" height="97" viewBox="0 0 287 97" fill="none">
                  <path d="M273 78C251.315 103.804 46.3694 101.192 19.0002 78C-8.36909 54.8077 -1.2271 39.3411 23.6061 18C48.4392 -3.34113 241 -5 263.606 13C286.212 31 294.685 52.196 273 78Z"/>
              </svg>
              <div class="connector-line top-bun-connector"></div>
              <div class="tech-stack-card">
                  <h2>LANGUAGES</h2>
                  <img v-for="tech in languages" :alt="tech.name" height="96" width="96" class="tech-icon" :src="tech.img"/>
                  <!-- Stack details here -->
              </div>
          </div>
          <div class="btm-bun">
              <svg xmlns="http://www.w3.org/2000/svg" width="280" height="64" viewBox="0 0 280 64" fill="none">
                  <path d="M271.426 2H13.1352C13.1352 2 -49.5294 62 136.778 62C323.085 62 271.426 2 271.426 2Z"/>
              </svg>
              <div class="connector-line"></div>
              <div class="tech-stack-card">
                  <h2>DEVOPS</h2>
                  <img v-for="tech in devops" :alt="tech.name" height="96" width="96" class="tech-icon" :src="tech.img"/>
                  <!-- Stack details here -->
              </div>
          </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
    height: 100dvh;
}

.burger-header {
  color: var(--textColor);
  text-align: center;
}

.burger-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 60vh;
  width: max-content;
  margin: auto;
}
@media (max-width: 1024px) {
  .top-bun {
    &:hover {
      .connector-line {
        visibility: hidden;
      }
      .tech-stack-card {
        top: -160px;
        left: 0;
      }
    }
  }
  .lettuce {
    &:hover {
      .connector-line {
        visibility: hidden;
      }
      .tech-stack-card {
        top: 4rem;
        left: 2rem;
      }
    }
  }
  .patty {
    &:hover {
      .connector-line {
        visibility: hidden;
      }
      .tech-stack-card {
        top: 6rem;
        left: 0;
      }
    }
  }
  .btm-bun {
    &:hover {
      .connector-line {
        visibility: hidden;
      }
      .tech-stack-card {
        top: 2rem;
        right: -0.5rem;
      }
    }
  }
}
.top-bun {
  z-index: 4;
  margin: 0;
  transition: margin 0.5s ease;
    position: relative;

  svg {
    stroke-width: 0.25rem;
    stroke: #fafafa;
    fill: #212529;
  }

  &:hover {
    svg {
      stroke-width: 0.25rem;
      stroke: #fafafa;
      fill: #daa520;
    }
    .connector-line {
        opacity: 1;
        visibility: visible;
        top: -40px;
        left: calc(50% + 60px);
    }
    .tech-stack-card {
        opacity: 1;
        visibility: visible;
        top: -224px;
        left: 48px;
    }
    margin: 4rem 0;
    transition: margin 0.5s ease;
  }
}

.lettuce {
  z-index: 3;
  margin-top: -1.8rem;
  margin-bottom: 0;
  transition: margin-bottom 0.5s ease, margin-top 0.5s ease;
    position: relative;

  svg {
    stroke-width: 0.25rem;
    stroke: #fafafa;
    fill: #212529;
  }

  &:hover {
    svg {
      stroke-width: 0.25rem;
      stroke: #fafafa;
      fill: #32cd32;
    }
    .connector-line {
        opacity: 1;
        visibility: visible;
        rotate: 90deg;
        top: 48px;
        right: -52px;
    }
    .tech-stack-card {
        opacity: 1;
        visibility: visible;
        top: 8px;
        right: -350px;
    }
    margin: 4rem 0;
    padding-bottom: 4rem;
    transition: margin 0.5s ease;
  }
}

.patty {
  z-index: 1;
  margin-top: -4rem;
  padding: 1rem;
  transition: padding 0.5s ease;
    position: relative;

  svg {
    stroke-width: 0.25rem;
    stroke: #fafafa;
    fill: #212529;
  }

  &:hover {
    svg {
      stroke-width: 0.25rem;
      stroke: #fafafa;
      fill: #8B4513;
    }
    .connector-line {
        opacity: 1;
        visibility: visible;
        rotate: 90deg;
        top: 112px;
        left: 0;
    }
    .tech-stack-card {
        opacity: 1;
        visibility: visible;
        top: 64px;
        left: -350px;
    }
    padding: 4rem 0;
    margin-top: 0;
    margin-bottom: 2rem;
    transition: padding 0.5s ease;
  }
}

.btm-bun {
  z-index: 2;
  margin-top: -1.8rem;
  margin-bottom: 0;
  transition: margin-bottom 0.5s ease, margin-top 0.5s ease;
    position: relative;

  svg {
    stroke-width: 0.25rem;
    stroke: #fafafa;
    fill: #212529;
  }

  &:hover {
    svg {
      stroke-width: 0.25rem;
      stroke: #fafafa;
      fill: #daa520;
    }
    .connector-line {
        opacity: 1;
        visibility: visible;
        top: 56px;
        left: 48px;
    }
    .tech-stack-card {
        opacity: 1;
        visibility: visible;
        top: 106px;
        right: 32px;
    }
    margin-top: 4rem;
    padding-bottom: 2rem;
    transition: margin-top 0.5s ease;
  }
}

.connector-line {
    width: 2px;
    height: 50px;
    background-color: #fafafa;
    transform-origin: top left;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-out;
}

.tech-stack-card {
    width: 300px;
    border: 1px solid #fafafa;
    border-radius: 8px;
    padding: 20px;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    color: #fafafa;
    background: #213547;
    transition: opacity 0.5s ease-out;

    .tech-stack-items {
        display: flex;
        gap: 2rem;

        .test-item {
            height: 32px;
            width: 32px;
            background-color: #fafafa;
        }
    }
}

.tech-icon {
    height: 3rem;
    width: 3rem;
}
</style>