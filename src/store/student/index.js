import todoActions from './actions';
import todoMutations from './mutations';
import todoGetters from './getters';
import todoStatesVars from './student-variable';

export default {
    state: todoStatesVars,
    getters: todoGetters,
    mutations: todoMutations,
    actions: todoActions
};