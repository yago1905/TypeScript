import { renderBlock } from './lib.js';
export function renderUserBlock(name, linkAvatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount > 0 ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${linkAvatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBWSxFQUNaLFVBQWtCLEVBQ2xCLG1CQUEyQjtJQUUzQixNQUFNLGdCQUFnQixHQUNwQixtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDL0QsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFNUQsV0FBVyxDQUNULFlBQVksRUFDWjs7aUNBRTZCLFVBQVU7OzRCQUVmLElBQUk7O2tDQUdsQixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNqQyxTQUFTLGdCQUFnQjs7OztLQUloQyxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2soXG4gIG5hbWU6IHN0cmluZyxcbiAgbGlua0F2YXRhcjogc3RyaW5nLFxuICBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXJcbikge1xuICBjb25zdCBmYXZvcml0ZXNDYXB0aW9uID1cbiAgICBmYXZvcml0ZUl0ZW1zQW1vdW50ID4gMCA/IGZhdm9yaXRlSXRlbXNBbW91bnQgOiAn0L3QuNGH0LXQs9C+INC90LXRgic7XG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICd1c2VyLWJsb2NrJyxcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJhdmF0YXJcIiBzcmM9XCIke2xpbmtBdmF0YXJ9XCIgYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke25hbWV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZmF2XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWljb24ke1xuICAgICAgICAgICAgICBoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJydcbiAgICAgICAgICAgIH1cIj48L2k+JHtmYXZvcml0ZXNDYXB0aW9ufVxuICAgICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGBcbiAgKTtcbn1cbiJdfQ==