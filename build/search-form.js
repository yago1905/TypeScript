import { renderBlock } from './lib';
export function renderSearchFormBlock() {
    const dateObj = new Date(); // создаем новую дату
    const datePlus2_obj = new Date(dateObj.getTime() + 2 * 86400000); // создаем новую дату + 2 дня
    const minDate = dateObj.toLocaleDateString('en-CA'); // переводим дату в формат локал дате стринг
    const curDate = dateObj.toLocaleDateString('en-CA');
    const minOutDate = datePlus2_obj.toLocaleDateString('en-CA');
    dateObj.setMonth(dateObj.getMonth() + 2); //+1 mounts
    dateObj.setDate(0);
    const maxOutDate = dateObj.toLocaleDateString('en-CA');
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${curDate}" min="${minDate}" max="${maxOutDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${minOutDate}" min="${minOutDate}" max="${maxOutDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUVwQyxNQUFNLFVBQVUscUJBQXFCO0lBQ25DLE1BQU0sT0FBTyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7SUFDdkQsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLDZCQUE2QjtJQUMvRixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEM7SUFDakcsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUU3RCxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7SUFDckQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVuQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkQsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRBaUJ1RCxPQUFPLFVBQVUsT0FBTyxVQUFVLFVBQVU7Ozs7NERBSTNDLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVTs7Ozs7Ozs7Ozs7O0tBWXpHLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpIHtcbiAgY29uc3QgZGF0ZU9iajogRGF0ZSA9IG5ldyBEYXRlKCk7IC8vINGB0L7Qt9C00LDQtdC8INC90L7QstGD0Y4g0LTQsNGC0YNcbiAgY29uc3QgZGF0ZVBsdXMyX29iaiA9IG5ldyBEYXRlKGRhdGVPYmouZ2V0VGltZSgpICsgMiAqIDg2NDAwMDAwKTsgLy8g0YHQvtC30LTQsNC10Lwg0L3QvtCy0YPRjiDQtNCw0YLRgyArIDIg0LTQvdGPXG4gIGNvbnN0IG1pbkRhdGUgPSBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTsgLy8g0L/QtdGA0LXQstC+0LTQuNC8INC00LDRgtGDINCyINGE0L7RgNC80LDRgiDQu9C+0LrQsNC7INC00LDRgtC1INGB0YLRgNC40L3Qs1xuICBjb25zdCBjdXJEYXRlID0gZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XG4gIGNvbnN0IG1pbk91dERhdGUgPSBkYXRlUGx1czJfb2JqLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tQ0EnKTtcblxuICBkYXRlT2JqLnNldE1vbnRoKGRhdGVPYmouZ2V0TW9udGgoKSArIDIpOyAvLysxIG1vdW50c1xuICBkYXRlT2JqLnNldERhdGUoMCk7XG5cbiAgY29uc3QgbWF4T3V0RGF0ZSA9IGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1DQScpO1xuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjdXJEYXRlfVwiIG1pbj1cIiR7bWluRGF0ZX1cIiBtYXg9XCIke21heE91dERhdGV9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHttaW5PdXREYXRlfVwiIG1pbj1cIiR7bWluT3V0RGF0ZX1cIiBtYXg9XCIke21heE91dERhdGV9XCIgbmFtZT1cImNoZWNrb3V0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApO1xufVxuIl19