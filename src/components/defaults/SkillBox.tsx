import React from 'react'

interface SkillBoxProps {
    image: any,
    name: string,
}

const SkillBox: React.FC<SkillBoxProps> = ({image, name}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3'>
        <img src={image} alt="skill-image" className='h-[40px] w-[40px]' />
        <p className='font-medium text-xs uppercase'>{name}</p>
    </div>
  )
}

export default SkillBox