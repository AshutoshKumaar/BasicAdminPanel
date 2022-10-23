var url =
  'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'

let index = 0
const letSearch = () => {
  const searchBar = document.getElementById('search-box').value.toUpperCase()
  const mytable = document.getElementById('tbd')
  let tr = mytable.getElementsByTagName('tr')

  for (let i = 0; i < tr.length; i++) {
    let fulltd = tr[i].getElementsByTagName('td')
    let td = tr[i].getElementsByTagName('td')[1]
    if (td) {
      let textValue = td.textContent || td.innerHTML
      if (textValue.toUpperCase().indexOf(searchBar) > -1) {
        tr[i].style.display = ''
        td.classList.add('active')
        td.onclick = () => {
          const detailsDiv = document.getElementById('info-content')
          let DetailsTag = `<div><b>User selected: ${
            fulltd[1].textContent + ' ' + fulltd[2].textContent
          }</b></div>
          <div><b>Description: </b><textarea cols="50" rows="5"> readonly: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
              </textarea>
          </div>
          <div><b>Address:</b> 6480 Nec Ct</div>
          <div><b>City:</b> Dinwiddie</div>
          <div><b>State:</b> NV</div>
          <div><b>Zip:</b> 91295</div>`
          detailsDiv.innerHTML = DetailsTag;
        }
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}

$.get(url, (response) => {
  const responseText = response
  // console.log(responseText)
  // letSearch(responseText)
  printData(responseText)
})

function printData(dta) {
  const tbody = document.getElementById('tBody')
  let tr = tbody.querySelectorAll('.data-row')

  for (let i = 0; i < tr.length; i++) {
    let tableTag = `<td class="column1 new">${dta[i].id}</td>
                    <td class="column2">${dta[i].firstName}</td>
                    <td class="column3">${dta[i].lastName}</td>
                    <td class="column4">${dta[i].email}</td>
                    <td class="column5">${dta[i].phone}</td>`

    tr[i].innerHTML = tableTag
  }
}
