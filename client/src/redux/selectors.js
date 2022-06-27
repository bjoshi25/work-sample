export const getCharacterState = (store) => store.character

export const getComicsData = (store) =>
getCharacterState(store) ? getCharacterState(store).comicsData : []
