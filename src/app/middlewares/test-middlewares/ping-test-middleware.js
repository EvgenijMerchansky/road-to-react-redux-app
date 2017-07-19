import store from '../../store';

// моя мидлвара ,которая показывает тип действия
export const ping = store => next => action => {
  console.log(`действие: ${action.type}`);

  return next(action);
}
