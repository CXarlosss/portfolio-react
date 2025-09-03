import React, { useState, useEffect, useMemo, useCallback } from "react";
import "../../styles/components/portfolio/projectCard.module.css";
import Button from "../common/Button";
// Import necessary icons
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRegImages,
  FaReact, // React icon
  FaJsSquare, // JavaScript icon
  FaHtml5, // HTML icon
  FaCss3Alt, // CSS icon
  FaNodeJs, // Node.js icon

  FaGitAlt, // General Git icon (for GitHub)
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import {
  SiTypescript, // TypeScript icon
  SiTailwindcss, // Tailwind CSS icon
  SiNextdotjs, // Next.js icon
  SiMongodb, // MongoDB icon
  SiExpress, // Express icon
  SiVercel, // Vercel icon
  SiVite, // Vite icon
  SiFramer, // Framer Motion icon
  SiReactquery, // TanStack React Query icon
  SiZod, // Zod icon
} from "react-icons/si"; // Importing from Simple Icons for more specific tech icons
import { TbAppWindow } from "react-icons/tb"; // Example for 'App Router' (could be custom)
import { RiSeoLine } from "react-icons/ri"; // SEO icon
import { MdOutlineDashboardCustomize } from "react-icons/md"; // Headless UI or custom UI
import { IoLeafOutline } from "react-icons/io5"; // Placeholder for 'Lucide React' or similar utility library
import { GrResources } from "react-icons/gr"; // Placeholder for 'UUID'
import { PiChartLineUpBold } from "react-icons/pi"; // For 'Recharts'

import { motion, AnimatePresence } from "framer-motion";

// --- Component ---
function ProjectCard({ project, onClick }) {
  const {
    title,
    description,
    thumbnail,
    images = [],
    technologies = [],
    githubLink,
    liveDemoLink,
  } = project;

  // Map technology names to icon components
  const techIcons = {
    // Frontend
    "React": <FaReact size={20} />,
    "JavaScript": <FaJsSquare size={20} />,
    "HTML": <FaHtml5 size={20} />,
    "CSS": <FaCss3Alt size={20} />,
    "TypeScript": <SiTypescript size={20} />,
    "Tailwind CSS": <SiTailwindcss size={20} />,
    "Next.js": <SiNextdotjs size={20} />,
"Redux": <SiRedux size={20} />,
    "Vite": <SiVite size={20} />,
    "Framer Motion": <SiFramer size={20} />,
    "Headless UI": <MdOutlineDashboardCustomize size={20} />,
    "Heroicons": <MdOutlineDashboardCustomize size={20} />, // Reusing for Heroicons
    "Lucide React": <IoLeafOutline size={20} />, // Placeholder, use a more specific icon if available
    "React Router v6": <FaReact size={20} />, // Reusing React icon for router
    "TanStack React Query": <SiReactquery size={20} />,
    "React Hook Form": <FaReact size={20} />, // Reusing React icon for hook form
    "Recharts": <PiChartLineUpBold size={20} />,
    "React Circular Progressbar": <PiChartLineUpBold size={20} />, // Reusing for progressbar
    "React Date Picker": <FaReact size={20} />, // Reusing for date picker
    "React Calendar": <FaReact size={20} />, // Reusing for calendar
    "React Swipeable List": <FaReact size={20} />, // Reusing for swipeable list

    // Backend
    "Node.js": <FaNodeJs size={20} />,
    "Express": <SiExpress size={20} />,
    "MongoDB": <SiMongodb size={20} />,
    "Zod": <SiZod size={20} />, // Backend validation or schema definition
    "PostCSS": <FaCss3Alt size={20} />, // Can be categorized here if used for build process
    "Autoprefixer": <FaCss3Alt size={20} />, // Same as above

    // Other Tools/Concepts
    "App Router": <TbAppWindow size={20} />, // Custom icon for App Router
    "SEO Optimizado": <RiSeoLine size={20} />,
    "Vercel": <SiVercel size={20} />,
    "Markdown": <FaGitAlt size={20} />, // Placeholder for Markdown, could be custom
    "ESLint": <FaJsSquare size={20} />, // Reusing JS icon for ESLint
    "React Refresh": <FaReact size={20} />, // Reusing React icon
    "dnd-kit": <FaReact size={20} />, // Reusing React icon for DND kit
    "UUID": <GrResources size={20} />, // Placeholder for UUID
    "React Toastify": <FaReact size={20} />, // Reusing React icon for toastify
  };

  const getTechIcon = (techName) => {
    return techIcons[techName] || <FaReact size={20} />; // Default icon if not found
  };

  const allImages = useMemo(() => {
    return images.length > 0 ? images : [thumbnail];
  }, [images, thumbnail]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoadError, setImageLoadError] = useState(false);
  const [isTechVisible, setIsTechVisible] = useState(false); // State to manage technology visibility

  // Auto-carousel effect on hover
  useEffect(() => {
    if (allImages.length <= 1 || !isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allImages.length, isHovered]);

  const handleImageError = useCallback(() => {
    setImageLoadError(true);
  }, []);

  const goToNextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length]
  );

  const goToPrevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentImageIndex(
        (prev) => (prev - 1 + allImages.length) % allImages.length
      );
    },
    [allImages.length]
  );

  return (
    <motion.div
      className="projectCard"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      role="article"
      aria-label={`Project: ${title}`}
    >
      <div className="imageContainer">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={
              imageLoadError
                ? "https://placehold.co/400x300/e0e0e0/333333?text=Image+Not+Found"
                : allImages[currentImageIndex]
            }
            alt={`${title} screenshot ${currentImageIndex + 1}`}
            className="projectThumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onError={handleImageError}
          />
        </AnimatePresence>

        {allImages.length > 1 && (
          <>
            <div className="imageNavigation">
              <button
                className="navButton"
                onClick={goToPrevImage}
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button
                className="navButton"
                onClick={goToNextImage}
                aria-label="Next image"
              >
                &#8250;
              </button>
            </div>

            <div className="imageCounter">
              <FaRegImages size={14} />
              <span>
                {currentImageIndex + 1}/{allImages.length}
              </span>
            </div>
          </>
        )}

        <div className="overlay">
          <div className="overlayContent">
            <h3>{title}</h3>
            <p className="projectDescription">{description}</p>
          </div>
        </div>
      </div>

      <div className="projectDetails">
        {technologies.length > 0 && (
          <>
            {/* Added a clickable heading to toggle visibility */}
            <div
              className="tech-heading-container"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click from firing
                setIsTechVisible(!isTechVisible);
              }}
              aria-expanded={isTechVisible}
              aria-controls={`tech-list-${project.id}`}
            >
              <h3 className="tech-heading">Technologies</h3>
              <span className="toggle-icon">{isTechVisible ? "−" : "+"}</span>
            </div>

            <AnimatePresence>
              {isTechVisible && (
                <motion.div
                  id={`tech-list-${project.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="tech-list-wrapper"
                >
                  <ul className="projectTechnologies">
                    {technologies.map((tech) => (
                      <li key={tech} className="techIconPill" title={tech}>
                        {getTechIcon(tech)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        <div className="projectActions">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
            variant="outline"
          >
            View Details
          </Button>

          <div className="externalLinks">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                onClick={(e) => e.stopPropagation()}
                aria-label="View code on GitHub"
              >
                <FaGithub size={20} />
              </a>
            )}
            {liveDemoLink && (
              <a
                href={liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
                onClick={(e) => e.stopPropagation()}
                aria-label="View live demo"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;