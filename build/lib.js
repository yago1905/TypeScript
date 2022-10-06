export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
    }
}
export function renderToast(message, action) {
    let messageText = '';
    if (message !== null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button !== null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDMUI7QUFDSCxDQUFDO0FBWUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxPQUF1QixFQUFFLE1BQWU7SUFDbEUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRXJCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtRQUNwQixXQUFXLEdBQUc7K0NBQzZCLE9BQU8sQ0FBQyxJQUFJO2FBQzlDLE9BQU8sQ0FBQyxJQUFJO3lDQUNnQixDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxJQUFJLEtBQUksU0FBUzs7S0FFN0QsQ0FBQztLQUNIO0lBRUQsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUV4QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUM7S0FDSDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2soZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZykge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gIH1cbn1cblxuaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICB0eXBlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFjdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgaGFuZGxlcjogKCkgPT4gdm9pZCB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb2FzdChtZXNzYWdlOiBNZXNzYWdlIHwgbnVsbCwgYWN0aW9uPzogQWN0aW9uKSB7XG4gIGxldCBtZXNzYWdlVGV4dCA9ICcnO1xuXG4gIGlmIChtZXNzYWdlICE9PSBudWxsKSB7XG4gICAgbWVzc2FnZVRleHQgPSBgXG4gICAgICA8ZGl2IGlkPVwiaW5mby1ibG9ja1wiIGNsYXNzPVwiaW5mby1ibG9jayAke21lc3NhZ2UudHlwZX1cIj5cbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICA8YnV0dG9uIGlkPVwidG9hc3QtbWFpbi1hY3Rpb25cIj4ke2FjdGlvbj8ubmFtZSB8fCAn0JfQsNC60YDRi9GC0YwnfTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHJlbmRlckJsb2NrKCd0b2FzdC1ibG9jaycsIG1lc3NhZ2VUZXh0KTtcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKTtcbiAgaWYgKGJ1dHRvbiAhPT0gbnVsbCkge1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKTtcbiAgICAgIH1cbiAgICAgIHJlbmRlclRvYXN0KG51bGwpO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==