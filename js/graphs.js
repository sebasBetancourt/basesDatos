export const graph = ()=>{
    am5.ready(function () {

        var root = am5.Root.new("chartdiv");
    
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
    
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            layout: root.verticalLayout
        }));
    
        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
        }));
    
        var data = [
        { "producto": "Laptop", "cantidad": 3 },
        { "producto": "Mouse", "cantidad": 4 },
        { "producto": "Monitor", "cantidad": 3 },
        { "producto": "Teclado", "cantidad": 5 },
        { "producto": "Auriculares", "cantidad": 2 },
        { "producto": "Impresora", "cantidad": 1 },
        { "producto": "Webcam", "cantidad": 2 },
        { "producto": "Micrófono", "cantidad": 1 },
        { "producto": "Disco Duro", "cantidad": 3 },
        { "producto": "Memoria RAM", "cantidad": 2 },
        { "producto": "Silla Gamer", "cantidad": 1 },
        { "producto": "Router WiFi", "cantidad": 2 }
    ];
    
    
        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            categoryField: "producto",
            renderer: am5xy.AxisRendererX.new(root, {
                minGridDistance: 30
            }),
            tooltip: am5.Tooltip.new(root, {})
        }));
    
        xAxis.data.setAll(data);
    
        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
        }));
    
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Cantidad Vendida",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "cantidad",
            categoryXField: "producto",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{categoryX}: {valueY}"
            })
        }));
    
        series.columns.template.setAll({
            tooltipY: 0,
            strokeOpacity: 0,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
        });
    
        series.data.setAll(data);
    
        series.appear();
        chart.appear(1000, 100);
    
        xAxis.get("renderer").labels.template.setAll({
            fill: am5.color("#fff"),
            fontSize: 12,
          });

          yAxis.get("renderer").labels.template.setAll({
            fill: am5.color("#fff"),
            fontSize: 12,
          });

          series.columns.template.setAll({
            fill: am5.color("#00ffcc"), 
            strokeOpacity: 0,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
          });

      
    });
    am5.ready(function() {

        var root = am5.Root.new("chartdiv2");
      
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
      
        var chart = root.container.children.push(
          am5xy.XYChart.new(root, {
            layout: root.verticalLayout
          })
        );
      
        var xAxis = chart.xAxes.push(
          am5xy.CategoryAxis.new(root, {
            categoryField: "curso",
            renderer: am5xy.AxisRendererX.new(root, {
              minGridDistance: 30
            }),
            tooltip: am5.Tooltip.new(root, {})
          })
        );
      
        var yAxis = chart.yAxes.push(
          am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
          })
        );
      
        var series = chart.series.push(
          am5xy.ColumnSeries.new(root, {
            name: "Estudiantes",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "cantidad",
            categoryXField: "curso",
            tooltip: am5.Tooltip.new(root, {
              labelText: "{categoryX}: {valueY} estudiantes"
            })
          })
        );
      
        series.columns.template.setAll({
          cornerRadiusTL: 5,
          cornerRadiusTR: 5,
          fillOpacity: 0.9
        });
      
        var data = [
          { curso: "Álgebra", cantidad: 6, imagen: "https://cdn-icons-png.flaticon.com/512/3469/3469645.png" },
          { curso: "Física", cantidad: 9, imagen: "https://cdn-icons-png.flaticon.com/512/4325/4325991.png" },
          { curso: "Programación", cantidad: 2, imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png" },
          { curso: "Historia", cantidad: 10, imagen: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
          { curso: "Biología", cantidad: 1, imagen: "https://cdn-icons-png.flaticon.com/512/2942/2942931.png" },
          { curso: "Filosofía", cantidad: 1, imagen: "https://cdn-icons-png.flaticon.com/512/2554/2554979.png" }
        ];
      
        xAxis.data.setAll(data);
        series.data.setAll(data);
      
        series.bullets.push(function(root, series, dataItem) {
          return am5.Bullet.new(root, {
            locationY: 1,
            sprite: am5.Picture.new(root, {
              width: 30,
              height: 30,
              centerX: am5.p50,
              centerY: am5.p50,
              y: -20,
              src: dataItem.dataContext.imagen
            })
          });
        });
      
        series.appear(1000);
        chart.appear(1000, 100);

        xAxis.get("renderer").labels.template.setAll({
            fill: am5.color("#fff"),
            fontSize: 12,
          });

          yAxis.get("renderer").labels.template.setAll({
            fill: am5.color("#fff"),
            fontSize: 12,
          });

          series.columns.template.setAll({
            fill: am5.color("#00ffcc"), 
            strokeOpacity: 0,
            cornerRadiusTL: 5,
            cornerRadiusTR: 5
          });
      });






      

      am5.ready(function () {
        var root = am5.Root.new("chartdiv3");
      
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
      
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
          })
        );
      
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "cursos",
            categoryField: "profesor",
            alignLabels: false,
            legendLabelText: "[white]{category}[/]",
            legendValueText: "[white]{value} cursos[/]"
          })
        );
      
        series.labels.template.setAll({
          fontSize: 14,
          fill: am5.color(0xffffff),
          text: "{category}: {value}",
          radius: 10
        });
      
        series.slices.template.setAll({
          stroke: am5.color(0x000000),
          strokeWidth: 1,
          tooltipText: "{category}: {value} cursos"
        });
      
        series.slices.template.states.create("hover", {
          scale: 1.05,
          shadowColor: am5.color(0x000000),
          shadowBlur: 10,
          shadowOffsetX: 3,
          shadowOffsetY: 3
        });
      
        series.data.setAll([
          { profesor: "P001", cursos: 3 },
          { profesor: "P002", cursos: 4 },
          { profesor: "P003", cursos: 1 },
          { profesor: "P004", cursos: 1 },
          { profesor: "P005", cursos: 1 },
          { profesor: "P006", cursos: 2 },
          { profesor: "P007", cursos: 1 },
          { profesor: "P008", cursos: 1 },
          { profesor: "P009", cursos: 1 },
          { profesor: "P010", cursos: 2 }
        ]);
      
        chart.appear(1000, 100);
        series.appear(1000, 100);
      });
}