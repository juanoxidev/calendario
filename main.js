let array = [];
$(".date").datepicker({
  language: "es",
  multidate: true,
  format: "dd-mm-yyyy",
});

$(".btn").on("click", function () {
  var the_date = $(".date:first").datepicker("getDates");
  array = [...the_date];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element.toLocaleDateString("es-ES"));
  }
});

// https://bootstrap-datepicker.readthedocs.io/en/stable/
