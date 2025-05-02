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
    <div className='flex flex-col gap-2 w-[250px] items-center justify-center'>
        <img src={image} alt="project-image" className='w-[100px] h-[90px] md:px-4 px-3' />
        <h1 className='capitalize font-medium text-base text-center'>{title}</h1>
        <p className='text-[14px] font-light text-center'>{descr}</p>
        <Link to={link} target='_blank' className='text-sm capitalize underline pb-1'>preview</Link>
    </div>
  )
}

export default ProjectBox