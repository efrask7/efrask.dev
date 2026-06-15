import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

interface IProjectCardsProps extends IGithubRepo {
  hideMore?: boolean
  lang: string
  visit_repo: string
  visit_web: string
  view_more: string
}

export default function ProjectCard(props: IProjectCardsProps) {
  return (
    <div
      className="border border-primary/30 shadow shadow-primary/20 rounded-md px-4 py-2 flex flex-col gap-2 flex-auto bg-bg-dark/80"
    >
      <h3
        className="text-center
  text-xl
  uppercase
  tracking-wide
  font-bold bg-primary/15 py-1 rounded-md text-primary-light"
      >
        {props.name}
      </h3>
      <p className="bg-bg-light/10 px-2 py-3 rounded-md text-justify text-bg-light">
        {props.description}
      </p>

      <div className="flex flex-col gap-2">
        <div
          className="flex gap-1 justify-center bg-bg-light/10 py-2 rounded-md flex-wrap"
        >
          <div className="flex items-center flex-col gap-1">
            {
              (
                <a
                  href={props.html_url}
                  target="_blank"
                  title={props.visit_repo}
                  className="rounded-full flex items-center justify-center gap-1 px-2 py-1 text-btns transition-colors hover:bg-primary/15"
                >
                  <BsGithub className="mt-1" />
                  Github
                </a>
              )
            }
            {
              props.homepage && (
                <a
                  href={props.homepage}
                  target="_blank"
                  title={props.visit_web}
                  className="rounded-full flex items-center justify-center gap-1 px-2 py-1 text-btns transition-colors hover:bg-primary/15"
                >
                  <FiExternalLink className="mt-1" />
                  {props.visit_web}
                </a>
              )
            }

            {
              !props.hideMore && (
                <a
                  href={`/${props.lang}/projects/repo?name=${props.name}`}
                  className="text-white hover:bg-primary/80 bg-primary px-2 py-1 rounded-lg"
                  title={props.view_more}
                >
                  {props.view_more}
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
