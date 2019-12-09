/** 获取一个用于挂载Portals或动态弹窗等内容的节点, 多次调用时会获取到相同的节点 */
const portalsID = 'J__PORTALS__NODE__';
export const getPortalsNode = (namespace) => {
  const id = portalsID + (namespace ? namespace : 'DEFAULT');

  let portalsEl = document.getElementById(id);

  if (!portalsEl) {
    const el = document.createElement('div');
    el.id = id;
    el.setAttribute('warning');
    portalsEl = document.body.appendChild(el);
  }
  return portalsEl;
};
