import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initial = {
  todo: [
    { id: 't1', content: 'Add movie showtimes' },
    { id: 't2', content: 'Fix booking form' },
  ],
  doing: [{ id: 'd1', content: 'Build calendar integration' }],
  done: [{ id: 'c1', content: 'Design dashboard cards' }],
}

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initial)

  function onDragEnd(result) {
    const { source, destination } = result
    if (!destination) return
    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    const sourceCol = Array.from(columns[source.droppableId])
    const [moved] = sourceCol.splice(source.index, 1)

    const destCol = Array.from(columns[destination.droppableId])
    destCol.splice(destination.index, 0, moved)

    setColumns({
      ...columns,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4">
        {Object.keys(columns).map((key) => (
          <Droppable droppableId={key} key={key}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="bg-white dark:bg-slate-800 p-3 rounded flex-1 min-h-[200px]"
              >
                <h4 className="font-semibold mb-2 capitalize">{key}</h4>
                {columns[key].map((item, idx) => (
                  <Draggable draggableId={item.id} index={idx} key={item.id}>
                    {(prov) => (
                      <div
                        ref={prov.innerRef}
                        {...prov.draggableProps}
                        {...prov.dragHandleProps}
                        className="p-3 mb-2 bg-slate-100 dark:bg-slate-700 rounded"
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  )
}
