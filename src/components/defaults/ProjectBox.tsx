import React from 'react'
import { Link } from 'react-router-dom'
interface ProjectBoxProps {
    image: any,
    title: any,
    link: string,
    descr: string,
} 

const ProjectBox: React.FC<ProjectBoxProps> = ({image, title, link, descr}) => {
  return (
    <div className='flex flex-col gap-2 border-none shadow-xl w-[100%] md:w-[250px] h-[100%] md:h-[350px] rounded-lg p-2'>
        <img src={image} alt="project-image" className='w-[100%] md:w-[250px]' />
        <h1 className='capitalize font-normal text-lg md:text-xl'>{title}</h1>
        <p className='text-md md:text-base font-light'>{descr}</p>
        <Link to={link} target='_blank' className='text-base capitalize'>preview</Link>
    </div>
  )
}

export default ProjectBox