import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../shared/store';
import { IList, IListTheme, ITodo } from '@todo-nx/interfaces';

export interface ITodoState {
  lists: IList[];
  activeList?: IList;
  error?: any;
  loading?: boolean;
  activeTodo?: ITodo;
  sortBy?: TodoSortBy;
  editingActiveListName?: boolean;
}

const initialState: ITodoState = { lists: [] };

export const todoStoreKey = 'todo';

export enum TodoSortBy {
  name = 'title',
  date = 'createdAt',
  star = 'starred'
}

export const todoStore = createSlice({
  name: todoStoreKey,
  initialState,
  reducers: {
    addTodo: (state: Draft<ITodoState>, action: PayloadAction<ITodo>) => {
      state.loading = true;
    },
    addTodoSuccess: (state: Draft<ITodoState>, action: PayloadAction<{ listId: string, todo: ITodo }>) => {
      const index = state.lists.findIndex(l => l.id === action.payload.listId);
      state.lists[index].todos.push(action.payload.todo);
      state.loading = false;
    },
    removeTodo: (state: Draft<ITodoState>, action: PayloadAction<ITodo>) => {
      state.loading = true;
    },
    removeTodoSuccess: (state: Draft<ITodoState>, action: PayloadAction<ITodo>) => {
      const listIndex = state.lists.findIndex(l => l.id === action.payload.list!.id);
      const todoIndex = state.activeList!.todos.findIndex(t => t.id === action.payload.id);
      state.lists[listIndex].todos.splice(todoIndex, 1);
      state.loading = false;
      state.activeTodo = undefined;
    },
    updateTodo: (state: Draft<ITodoState>, action: PayloadAction<ITodo>) => {
      state.loading = true;
    },
    updateTodoSuccess: (state: Draft<ITodoState>, action: PayloadAction<ITodo>) => {
      const listIndex = state.lists.findIndex(l => l.id === action.payload.list!.id);
      const todoIndex = state.activeList!.todos.findIndex(t => t.id === action.payload.id);
      const existingTodo = state.lists[listIndex].todos[todoIndex];

      state.lists[listIndex].todos.splice(todoIndex, 1, { ...existingTodo, ...action.payload });
      state.loading = false;
    },
    addList: (state: Draft<ITodoState>, action: PayloadAction<{ navigate: any }>) => {
      state.loading = true;
    },
    addListSuccess: (state: Draft<ITodoState>, action: PayloadAction<IList>) => {
      state.lists.push(action.payload);
      state.loading = false;
    },
    loadLists: (state: Draft<ITodoState>) => {
      state.loading = true;
    },
    loadListsSuccess: (state: Draft<ITodoState>, action: PayloadAction<IList[]>) => {
      state.lists = action.payload;
      state.loading = false;
    },
    apiError: (state: Draft<ITodoState>, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    removeList: (state: Draft<ITodoState>, action: PayloadAction<{ list: IList, navigate?: any }>) => {
      state.loading = true;
    },
    removeListSuccess: (state: Draft<ITodoState>, action: PayloadAction<IList>) => {
      const index = state.lists.findIndex(l => l.id === action.payload.id);
      state.lists.splice(index, 1);
      state.loading = false;
    },
    syncListSuccess: (state: Draft<ITodoState>, action: PayloadAction<IList>) => {
      state.loading = false;
      state.lists.splice(state.lists.findIndex(l => l.id === action.payload.id), 1, action.payload);
    },
    syncListError: (state: Draft<ITodoState>, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    },
    selectList: (state: Draft<ITodoState>, action: PayloadAction<{ id?: string, navigate: any }>) => {
      if (state.activeList?.id !== action.payload.id) {
        state.activeTodo = undefined;
      }
      state.activeList = state.lists.find(l => l.id === action.payload.id);
    },
    clearError: (state: Draft<ITodoState>) => {
      state.error = undefined;
    },
    clearActiveList: (state: Draft<ITodoState>) => {
      state.activeList = undefined;
    },
    starTodo: (state: Draft<ITodoState>) => {
      state.loading = true;
    },
    selectTodo: (state: Draft<ITodoState>, action: PayloadAction<ITodo | undefined>) => {
      state.activeTodo = action.payload;
    },
    sortBy: (state: Draft<ITodoState>, action: PayloadAction<TodoSortBy>) => {
      state.sortBy = action.payload;
      state.activeList!.todos.sort((a: Draft<ITodo>, b: Draft<ITodo>) => {
        const reverse = action.payload === TodoSortBy.name ? 1 : -1;
        return reverse * (a[action.payload]! > b[action.payload]! ? 1 : -1);
      });
    },
    startRenameList: (state: Draft<ITodoState>) => {
      state.editingActiveListName = true;
    },
    renameList: (state: Draft<ITodoState>, action: PayloadAction<{ id: string, name: string }>) => {
      state.loading = true;
    },
    renameListSuccess: (state: Draft<ITodoState>, action: PayloadAction<{ id: string, name: string }>) => {
      const index = state.lists.findIndex(l => l.id === action.payload.id);
      state.lists[index].name = action.payload.name;
      state.editingActiveListName = false;
      state.loading = false;
    },
    selectListTheme: (state: Draft<ITodoState>, action: PayloadAction<IListTheme | undefined>) => {
      state.loading = true;
    },
    selectListThemeSuccess: (state: Draft<ITodoState>, action: PayloadAction<{ id: string, theme?: IListTheme }>) => {
      const index = state.lists.findIndex(l => l.id === action.payload.id);
      state.lists[index].theme = action.payload.theme?.id;
      state.loading = false;
    },
  }
});

export const {
  addTodo,
  addTodoSuccess,
  removeTodo,
  removeTodoSuccess,
  updateTodo,
  addList,
  selectList,
  addListSuccess,
  loadLists,
  loadListsSuccess,
  apiError,
  clearError,
  removeList,
  removeListSuccess,
  clearActiveList,
  updateTodoSuccess,
  selectTodo,
  sortBy,
  startRenameList,
  renameList,
  renameListSuccess,
  selectListTheme,
  selectListThemeSuccess
} = todoStore.actions;


const todoSelector = (state: State): ITodoState => state.todo;

export const listsSelector = (state: State) => todoSelector(state).lists;
export const activeListSelector = (state: State) => todoSelector(state).activeList;
export const loadingSelector = (state: State) => todoSelector(state).loading;
export const errorSelector = (state: State) => todoSelector(state).error;
export const listSelector = (id: string) => (state: State) => listsSelector(state).find(l => l.id === id);

export const todosSelector = (state: State) => activeListSelector(state)?.todos || [];
export const completeTodosSelector = (state: State) => todosSelector(state).filter(t => t.isComplete);
export const incompleteTodosSelector = (state: State) => todosSelector(state).filter(t => !t.isComplete);
export const activeTodoSelector = (state: State) => state.todo.lists.find(l => l.id === state.todo.activeTodo?.list?.id)?.todos.find(t => t.id === state.todo.activeTodo?.id);

export const sortBySelector = (state: State) => todoSelector(state).sortBy;
export const editListNameSelector = (state: State) => todoSelector(state).editingActiveListName;

export default todoStore;
