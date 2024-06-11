$(function (){
  $('#example').DataTable({
    ajax :{
      url:"https://localhost:7179/api/test/GetAllEmployees",
      method:"GET",
      dataSrc:''
    },
    columns: [
      { data: 'name', name: '이름', title: '이름', width: '15%' },
      { data: 'position', name: '직책', title: '직책', width: '15%' },
      { data: 'office', name: '사무실', title: '사무실', width: '20%' },
      { data: 'age', name: '나이', title: '나이', width: '10%' },
      { data: 'startDate', name: '입사일', title: '입사일', width: '30%' },
      { data: 'salary', name: '급여', title: '급여', width: '10%' },
    ]

  });
  // $.ajax({
  //   url:"https://localhost:7179/api/test/GetAllEmployees",
  //   method:"GET",
  //   dataType:'json',
  //   success: function (data){
  //     const tbody=$('#example tbody');

  //     data.forEach(item => {
  //         const row = `
  //           <tr>
  //             <td>${item.name}</td>
  //             <td>${item.position}</td>
  //             <td>${item.office}</td>
  //             <td>${item.age}</td>
  //             <td>${item.startDate}</td>
  //             <td>${item.salary}</td>
  //           </tr>
  //         `;
  //         tbody.append(row);
  //       });
  //   },
  //   error: function(jqXHR, textStatus, errorThrown) {
  //       console.error('Error loading data:', textStatus, errorThrown);
  //     }
  // });
})
