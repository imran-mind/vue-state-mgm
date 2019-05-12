import userActions from './actions';
import userGetters from './getters';
import userMutations from './mutations';
import userStates from './userStates';

export default {
    state: userStates,
    getters: userGetters,
    mutations: userMutations,
    actions: userActions
}