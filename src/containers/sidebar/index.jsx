import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import arrow from '@assets/icons/arrow.svg';
import globalIcon from '@assets/icons/global.svg';
import plusIcon from '@assets/icons/plus.svg';
import Projects from '@components/projects';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const path = useLocation();

  // Projects
  const [projects, setProjects] = React.useState([
    { id: '1', title: 'Oasis' },
    { id: '2', title: 'Getter web site' },
    { id: '3', title: 'Chempionat platforma' },
    { id: '4', title: 'Bvir.uz' },
    { id: '5', title: 'Istanbul city' },
  ]);

  // Drag And Drop function
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProjects(items);
  };

  return (
    <div className="min-w-[250px] bg-white h-screen flex flex-col">
      {/* Sidebar Top */}
      <div className="flex items-center justify-between px-10 py-5">
        {/* Sidebar Arrows Wrapper */}
        <div className="flex gap-[23.17px]">
          {/* Sidebar Left Arrow */}
          <div className="w-[6.5px] 2xl:w-[8px] cursor-pointer">
            <img className="w-full" src={arrow} alt="left-arrow" />
          </div>
          {/* Sidebar Right Arrow */}
          <div className="w-[6.5px] 2xl:w-[8px] cursor-pointer">
            <img className="w-full rotate-180" src={arrow} alt="right-arrow" />
          </div>
        </div>

        {/* Profile Img */}
        <div className="w-[56px] h-[56px]">
          <img
            className="w-full h-full rounded-[50%] object-cover"
            src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
            alt=""
          />
        </div>

        {/* Comunity */}
        {/* <Link> */}
        <div className="w-[18px] 2xl:w-[21px] cursor-pointer">
          <img className="w-full" src={globalIcon} alt="global-icon" />
        </div>
        {/* </Link> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-between flex-grow-[1] pb-[60px]">
        <div>
          {/* Create Project Section */}
          <div className="flex items-center justify-between px-10 py-5 border-t-[1px] border-b-[1px] border-primaryBorder mb-[30px]">
            <p className="font-[500] text-[0.75rem] 2xl:text-[0.95rem] leading-[14.52px]">Create project</p>
            <div className="">
              <img src={plusIcon} alt="" />
            </div>
          </div>

          {/* Projects */}
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="projects">
              {(provided) => (
                <div
                  className="flex flex-col gap-2 px-[15px]"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {projects.map(({ id, title }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Projects
                            projectId={id}
                            projectName={title}
                            isActive={path.pathname === `/tasks/project/${id}`}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        {/* Archive projects */}
        <div className="px-10">
          <p className="font-[400] text-[0.75rem] 2xl:text-[0.95rem] leading-[14.52px]">Archive projects</p>
        </div>
      </div>
    </div>
  );
}