"use client"

import { useEffect, useState } from "react";

const SliderTechnologies = ({ data }: { data: any[] }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resolveImagePath = (path: string) => {
    if (!isClient) return path;
    if (window.location.hostname.includes('github.io')) {
      return `/portfolio-nextjs${path.replace('/portfolio-nextjs', '')}`;
    }
    return path.replace('/portfolio-nextjs', '');
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 
                        0 0 40px rgba(139, 92, 246, 0.1),
                        inset 0 0 20px rgba(139, 92, 246, 0.05);
          }
          50% {
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.6), 
                        0 0 60px rgba(139, 92, 246, 0.3),
                        inset 0 0 20px rgba(139, 92, 246, 0.1);
          }
        }

        .skill-card {
          position: relative;
          background: linear-gradient(135deg, rgba(65, 47, 123, 0.2) 0%, rgba(89, 65, 169, 0.15) 100%);
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 16px;
          padding: 24px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
        }

        .skill-card:hover {
          transform: translateY(-12px) scale(1.08) rotateX(8deg) rotateY(2deg);
          background: linear-gradient(135deg, rgba(89, 65, 169, 0.4) 0%, rgba(139, 92, 246, 0.3) 100%);
          border-color: rgba(139, 92, 246, 0.6);
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .skill-image {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.3));
        }

        .skill-card:hover .skill-image {
          filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.8)) 
                  drop-shadow(0 0 40px rgba(139, 92, 246, 0.4));
          transform: scale(1.15) rotate(-5deg);
        }

        .skill-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          transition: all 0.4s ease;
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
        }

        .skill-card:hover .skill-title {
          color: rgba(255, 255, 255, 1);
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.8),
                       0 0 40px rgba(139, 92, 246, 0.4);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 16px;
          }

          .skill-card {
            padding: 16px;
          }
        }
      `}</style>

      <div className="w-full flex justify-center">
        <div className="skills-grid">
          {data.map((item, index) => (
            <div key={index} className="skill-card">
              <img 
                src={resolveImagePath(item.src)} 
                alt={item.title} 
                width={80}
                height={80}
                className="skill-image w-16 h-16 object-contain"
              />
              <span className="skill-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SliderTechnologies;