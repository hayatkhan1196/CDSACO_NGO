"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

const API = (
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
).replace(/\/$/, "");

export default function ProjectDetailPage() {
    const params = useParams();
    const id = params.id;

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) return;

        const fetchProject = async () => {
            try {
                const response = await fetch(`${API}/content/projects`);

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const data = await response.json();

                const projects = data.items || [];

                const foundProject = projects.find(
                    (item) => String(item._id) === String(id)
                );

                if (!foundProject) {
                    throw new Error("Project not found");
                }

                setProject(foundProject);
            } catch (err) {
                console.error(err);
                setError("Unable to load this project.");
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    return (
        <>
            <SiteHeader />

            <main className="project-detail-page">

                <div className="project-detail-container">

                    {/* BACK BUTTON */}
                    <Link href="/projects" className="back-projects">
                        <span>←</span> Back to Projects
                    </Link>

                    {/* LOADING */}
                    {loading && (
                        <div className="project-loading">
                            <div className="loading-spinner"></div>
                            <p>Loading project...</p>
                        </div>
                    )}

                    {/* ERROR */}
                    {!loading && error && (
                        <div className="project-error">
                            <div className="error-icon">!</div>

                            <h2>Project Not Found</h2>

                            <p>{error}</p>

                            <Link href="/projects" className="error-button">
                                View All Projects
                            </Link>
                        </div>
                    )}

                    {/* PROJECT */}
                    {!loading && project && (
                        <article className="project-detail-card">

                            {/* IMAGE */}
                            {project.imageUrl && (
                                <div className="project-detail-image-wrapper">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title || "Project"}
                                        className="project-detail-image"
                                    />

                                    {/* IMAGE OVERLAY */}
                                    <div className="image-overlay"></div>

                                    {/* CATEGORY */}
                                    <div className="project-category">
                                        {project.category || "PROJECTS"}
                                    </div>
                                </div>
                            )}

                            {/* CONTENT */}
                            <div className="project-detail-content">

                                {/* CATEGORY IF NO IMAGE */}
                                {!project.imageUrl && (
                                    <div className="project-category-text">
                                        {project.category || "PROJECTS"}
                                    </div>
                                )}

                                {/* TITLE */}
                                <h1 className="project-detail-title">
                                    {project.title}
                                </h1>

                                {/* DECORATIVE LINE */}
                                <div className="title-line">
                                    <span></span>
                                </div>

                                {/* DESCRIPTION */}
                                <div className="project-description">
                                    {project.body || project.summary}
                                </div>

                                {/* EXTRA SUMMARY */}
                                {/* {project.summary &&
                  project.body &&
                  project.summary !== project.body && (
                    <div className="project-summary-box">
                      <strong>Project Overview</strong>

                      <p>{project.summary}</p>
                    </div>
                  )} */}

                                {/* FILE */}
                                {project.fileUrl && (
                                    <div className="project-file-section">
                                        <a
                                            href={project.fileUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-file-button"
                                        >
                                            <span>Open Project File</span>
                                            <span className="button-arrow">→</span>
                                        </a>
                                    </div>
                                )}

                                {/* BACK
                <div className="project-bottom">
                  <Link href="/projects" className="back-bottom">
                    ← Back to all projects
                  </Link>
                </div> */}

                            </div>
                        </article>
                    )}
                </div>
            </main>

            <SiteFooter />

            {/* ANIMATION CSS */}
            <style jsx>{`

        .project-detail-page {
          background: #f5f8f6;
          min-height: 80vh;
          padding: 55px 20px 90px;
        }

        .project-detail-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* BACK BUTTON */

        .back-projects {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #176b52;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 30px;
          transition: all 0.3s ease;
        }

        .back-projects:hover {
          transform: translateX(-5px);
          color: #0d4636;
        }

        .back-projects span {
          font-size: 22px;
        }

        /* CARD */

        .project-detail-card {
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(22, 78, 59, 0.10);
          animation: cardEnter 0.8s ease forwards;
          transform: translateY(25px);
          opacity: 0;
          margin-top:20px
        }

        @keyframes cardEnter {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* IMAGE */

        .project-detail-image-wrapper {
          position: relative;
          width: 100%;
          height: 520px;
          overflow: hidden;
        }

        .project-detail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s ease;
        }

        .project-detail-card:hover .project-detail-image {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.02),
            rgba(0, 0, 0, 0.35)
          );
          pointer-events: none;
        }

        /* CATEGORY */

        .project-category {
          position: absolute;
          left: 30px;
          bottom: 28px;
          background: #176b52;
          color: #ffffff;
          padding: 9px 18px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        /* CONTENT */

        .project-detail-content {
          padding: 45px 55px 50px;
        }

        .project-category-text {
          color: #47745c;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* TITLE */

        .project-detail-title {
          color: #164e3b;
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.15;
          margin: 0;
          font-weight: 700;
        }

        /* TITLE LINE */

        .title-line {
          width: 70px;
          height: 4px;
          background: #2d91d0;
          margin: 22px 0 30px;
          border-radius: 5px;
        }

        .title-line span {
          display: block;
          width: 25px;
          height: 100%;
          background: #176b52;
        }

        /* DESCRIPTION */

        .project-description {
          color: #52636d;
          font-size: 18px;
          line-height: 1.95;
          white-space: pre-line;
          max-width: 900px;
          animation: descriptionEnter 1s ease 0.3s both;
        }

        @keyframes descriptionEnter {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* SUMMARY */

        .project-summary-box {
          margin-top: 35px;
          padding: 24px 28px;
          background: #f4f8f5;
          border-left: 4px solid #176b52;
          border-radius: 10px;
        }

        .project-summary-box strong {
          color: #164e3b;
          font-size: 18px;
        }

        .project-summary-box p {
          color: #52636d;
          line-height: 1.7;
          margin: 8px 0 0;
        }

        /* FILE BUTTON */

        .project-file-section {
          margin-top: 35px;
        }

        .project-file-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 14px 22px;
          background: #164e3b;
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .project-file-button:hover {
          background: #0d4636;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(22, 78, 59, 0.20);
        }

        .button-arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .project-file-button:hover .button-arrow {
          transform: translateX(5px);
        }

        /* BOTTOM */

        .project-bottom {
          margin-top: 45px;
          padding-top: 25px;
          margin-bottom:30px
          border-top: 1px solid #e4ebe7;
        }

        .back-bottom {
          color: #176b52;
          font-weight: 700;
          text-decoration: none;
        }

        .back-bottom:hover {
          text-decoration: underline;
        }

        /* LOADING */

        .project-loading {
          background: white;
          border-radius: 24px;
          padding: 80px 30px;
          text-align: center;
        }

        .loading-spinner {
          width: 45px;
          height: 45px;
          border: 4px solid #e1ebe6;
          border-top-color: #176b52;
          border-radius: 50%;
          margin: 0 auto 20px;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .project-loading p {
          color: #52636d;
        }

        /* ERROR */

        .project-error {
          background: white;
          border-radius: 24px;
          padding: 60px 30px;
          text-align: center;
        }

        .error-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #f3e8e8;
          color: #b33a3a;
          font-size: 25px;
          font-weight: bold;
        }

        .project-error h2 {
          color: #164e3b;
          margin: 0 0 10px;
        }

        .project-error p {
          color: #52636d;
          margin-bottom: 25px;
        }

        .error-button {
          display: inline-block;
          background: #176b52;
          color: white;
          padding: 12px 22px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .project-detail-page {
            padding: 35px 15px 60px;
          }

          .project-detail-image-wrapper {
            height: 330px;
          }

          .project-detail-content {
            padding: 32px 25px 35px;
          }

          .project-detail-title {
            font-size: 34px;
          }

          .project-description {
            font-size: 16px;
            line-height: 1.8;
          }

          .project-category {
            left: 20px;
            bottom: 20px;
          }
        }

        @media (max-width: 480px) {

          .project-detail-page {
            padding: 25px 12px 50px;
          }

          .project-detail-card {
            border-radius: 18px;
          }

          .project-detail-image-wrapper {
            height: 250px;
          }

          .project-detail-content {
            padding: 27px 20px 30px;
          }

          .project-detail-title {
            font-size: 30px;
          }

          .project-category {
            left: 15px;
            bottom: 15px;
            padding: 7px 13px;
            font-size: 10px;
          }

          .project-description {
            font-size: 15px;
          }

          .project-file-button {
            width: 100%;
            justify-content: center;
            box-sizing: border-box;
          }
        }

      `}</style>
        </>
    );
}