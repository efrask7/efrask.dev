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
      className="shadow shadow-custom2 rounded-md px-4 py-2 flex flex-col gap-2 flex-auto bg-[#1a1a1a]"
    >
      <h3
        className="text-center
  text-xl
  uppercase
  tracking-wide
  font-bold bg-white/10 py-1 rounded-md"
      >
        {props.name}
      </h3>
      <p className="bg-white/10 px-2 py-3 rounded-md text-justify">
        {props.description}
      </p>

      <div className="flex flex-col gap-2">
        <div
          className="flex gap-1 justify-center bg-white/10 py-2 rounded-md flex-wrap"
        >
          <div className="flex items-center flex-col gap-1">
            {
              (
                <a
                  href={props.html_url}
                  target="_blank"
                  title={props.visit_repo}
                  className="rounded-full flex items-center justify-center gap-1 px-2 py-1 text-btns transition-colors hover:bg-white/10"
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
                  className="rounded-full flex items-center justify-center gap-1 px-2 py-1 text-btns transition-colors hover:bg-white/10"
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
                  className="text-white hover:bg-btns_icon/60 bg-btns_icon px-2 py-1 rounded-lg"
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
