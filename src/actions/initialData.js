export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ['column-3','column-2','column-1'],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "To do column",
          cardOrder: ['card-7','card-2','card-3','card-4','card-5','card-6','card-1'],
          cards: [
            { id: 'card-1', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 1', cover: 'https://a-static.besthdwallpaper.com/blackpink-s-rose-in-pink-venom-mv-photoshoot-wallpaper-3840x2160-102385_54.jpg',},
            { id: 'card-2', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 2', cover: null,},
            { id: 'card-3', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 3', cover: null,},
            { id: 'card-4', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 4', cover: null,},
            { id: 'card-5', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 5', cover: null,},
            { id: 'card-6', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 6', cover: null,},
            { id: 'card-7', boardId: "board-1", columnId: 'column-1', title: 'Title of Card 7', cover: null,},
            
          ],
        },
        {
            id: "column-2",
            boardId: "board-1",
            title: "To do column 2",
            cardOrder: ['card-8','card-9','card-10','card-11','card-12','card-13','card-14'],
            cards: [
              { id: 'card-8', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 1', cover: null,},
              { id: 'card-9', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 2', cover: null,},
              { id: 'card-10', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 3', cover: null,},
              { id: 'card-11', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 4', cover: null,},
              { id: 'card-12', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 5', cover: null,},
              { id: 'card-13', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 6', cover: null,},
              { id: 'card-14', boardId: "board-1", columnId: 'column-2', title: 'Title of Card 7', cover: null,},
              
            ],
          },
          {
            id: "column-3",
            boardId: "board-1",
            title: "To do column 3",
            cardOrder: ['card-15','card-16','card-17','card-18','card-19','card-20','card-21'],
            cards: [
              { id: 'card-15', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 1', cover: null,},
              { id: 'card-16', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 2', cover: null,},
              { id: 'card-17', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 3', cover: null,},
              { id: 'card-18', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 4', cover: null,},
              { id: 'card-19', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 5', cover: null,},
              { id: 'card-20', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 6', cover: null,},
              { id: 'card-21', boardId: "board-1", columnId: 'column-3', title: 'Title of Card 7', cover: null,},
              
            ],
          },
      ],
    },
  ],
};
