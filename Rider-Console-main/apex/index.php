<?php
$ROOT_DIR = $_SERVER['DOCUMENT_ROOT'];
include $ROOT_DIR . '/includes/head.php';
include $ROOT_DIR . '/utils/overview.php';

if ($ROLE != 'superadmin') {
    header("Location: /index.php?error=unauthorized");
    exit();
}

// Fetch all administrators
$admins = [];
$stmt = $db->prepare("SELECT id, full_name, email, role, created_at FROM administrator ORDER BY created_at DESC");
if ($stmt) {
    $stmt->execute();
    $result = $stmt->get_result();
    while ($row = $result->fetch_assoc()) {
        $admins[] = $row;
    }
    $stmt->close();
}

// Get overview data
$overview = Overview::getAll();

$revenueTrendCombinedJson = json_encode($overview['revenue_trend_combined']);
?>


<body class="layout-1" data-luno="theme-blue">
    <!-- start: sidebar -->
    <?php include $ROOT_DIR . '/includes/sidebar.php'; ?>

    <!-- start: body area -->
    <div class="wrapper">
        <?php include $ROOT_DIR . '/includes/top-nav.php'; ?>

        <!-- start: page body -->
        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">

            <div class="container-fluid">
                <div class="row g-3 row-deck">
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body">
                                <i class="fa fa-minus-circle fa-lg position-absolute top-0 end-0 p-3"></i>
                                <div class="mb-2 text-uppercase">Expenses</div>
                                <div><span class="h4"> Tsh. <?= number_format($overview['total_expenses'], 2) ?> </span>
                                    <span
                                        class="small <?= ($overview['growth']['expenses_growth'] ?? 0) > 0 ? 'text-danger' : 'text-success' ?>">
                                        <i
                                            class="fa fa-level-<?= ($overview['growth']['expenses_growth'] ?? 0) > 0 ? 'up' : 'down' ?>"></i>
                                        <?= $overview['growth']['expenses_growth'] !== null ? abs($overview['growth']['expenses_growth']) : 0 ?>%
                                    </span>
                                </div>
                                <small class="text-muted">Analytics for last week</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <i class="fa fa-money fa-lg position-absolute top-0 end-0 p-3"></i>
                                <div class="mb-2 text-uppercase">Collections</div>
                                <div><span class="h4">Tsh.
                                        <?= number_format($overview['total_collections'], 2) ?></span>
                                    <span
                                        class="small <?= ($overview['growth']['collections_growth'] ?? 0) > 0 ? 'text-danger' : 'text-success' ?>">
                                        <i
                                            class="fa fa-level-<?= ($overview['growth']['collections_growth'] ?? 0) > 0 ? 'up' : 'down' ?>"></i>
                                        <?= $overview['growth']['collections_growth'] !== null ? abs($overview['growth']['collections_growth']) : 0 ?>%
                                    </span>
                                </div>
                                <small class="text-muted">Analytics for last week</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <i class="fa fa-line-chart fa-lg position-absolute top-0 end-0 p-3"></i>
                                <div class="mb-2 text-uppercase">Revenue</div>
                                <div><span class="h4">Tsh. <?= number_format($overview['total_revenue'], 2) ?></span>
                                    <span
                                        class="small <?= ($overview['growth']['revenue_growth'] ?? 0) > 0 ? 'text-success' : 'text-danger' ?>">
                                        <i
                                            class="fa fa-level-<?= ($overview['growth']['revenue_growth'] ?? 0) > 0 ? 'up' : 'down' ?>"></i>
                                        <?= $overview['growth']['revenue_growth'] !== null ? abs($overview['growth']['revenue_growth']) : 0 ?>%
                                    </span>
                                </div>
                                <small class="text-muted">Analytics for last week</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <i class="fa fa-plus-circle fa-lg position-absolute top-0 end-0 p-3"></i>
                                <div class="mb-2 text-uppercase">Net Profit</div>
                                <div><span class="h4">Tsh. <?= number_format($overview['net_profit'], 2) ?></span>
                                    <span
                                        class="small <?= ($overview['growth']['net_profit_growth'] ?? 0) > 0 ? 'text-success' : 'text-danger' ?>">
                                        <i
                                            class="fa fa-level-<?= ($overview['growth']['net_profit_growth'] ?? 0) > 0 ? 'up' : 'down' ?>"></i>
                                        <?= $overview['growth']['net_profit_growth'] !== null ? abs($overview['growth']['net_profit_growth']) : 0 ?>%
                                    </span>
                                </div>
                                <small class="text-muted">Analytics for last week</small>
                            </div>
                        </div>
                    </div>

                    <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title m-0">Revenue Trend</h6>
                                <div class="dropdown morphing scale-left">
                                    <a href="#" class="card-fullscreen" data-bs-toggle="tooltip"
                                        title="Card Full-Screen"><i class="icon-size-fullscreen"></i></a>
                                </div>
                            </div>
                            <div class="card-body">
                                <div id="revenue-trend" style="height: 400px;" class="bg-light rounded-4"></div>
                            </div>
                        </div> <!-- .card end -->
                    </div>
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title m-0">Market Status</h6>
                            </div>
                            <div class="card-body">
                                <div class="d-flex text-center">
                                    <div class="p-2 flex-fill">
                                        <span class="text-muted">Drivers</span>
                                        <h5><?= $overview['total_active_riders'] ?> active</h5>
                                        <small
                                            class="text-<?= $overview['rider_status_ratio']['percentage_active'] > 50 ? 'success' : 'danger' ?>">
                                            <i
                                                class="fa fa-angle-<?= $overview['rider_status_ratio']['percentage_active'] > 50 ? 'up' : 'down' ?>"></i>
                                            <?= $overview['rider_status_ratio']['percentage_active'] ?>%
                                        </small>
                                    </div>
                                    <div class="p-2 flex-fill">
                                        <span class="text-muted">Vehicles</span>
                                        <h5><?= $overview['total_active_vehicles'] ?> active</h5>
                                        <small
                                            class="text-<?= $overview['vehicle_status_ratio']['percentage_rented'] > 50 ? 'success' : 'danger' ?>">
                                            <i
                                                class="fa fa-angle-<?= $overview['vehicle_status_ratio']['percentage_rented'] > 50 ? 'up' : 'down' ?>"></i>
                                            <?= $overview['vehicle_status_ratio']['percentage_rented'] ?>%
                                        </small>
                                    </div>
                                    <div class="p-2 flex-fill">
                                        <span class="text-muted">Rental Agreements</span>
                                        <h5><?= $overview['rental_status_ratio']['active'] ?> active</h5>
                                        <small
                                            class="text-<?= $overview['rental_status_ratio']['percentage_active'] > 50 ? 'success' : 'danger' ?>">
                                            <i
                                                class="fa fa-angle-<?= $overview['rental_status_ratio']['percentage_active'] > 50 ? 'up' : 'down' ?>"></i>
                                            <?= $overview['rental_status_ratio']['percentage_active'] ?>%
                                        </small>
                                    </div>
                                </div>

                                <!-- Manager tables -->
                                <div class="table-responsive mt-5">
                                    <table id="" class="table align-middle mb-0 card-table">
                                        <thead>
                                            <tr>
                                                <th>Init</th>
                                                <th>Revenue</th>
                                                <th>Rentals</th>
                                                <th>expenses</th>
                                                <th>Drivers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($overview['business_stats'] as $business): ?>
                                                <tr>
                                                    <td><?= $business['business_name'] ?></td>
                                                    <td><?= formatLargeNumber($business['total_revenue'], 2) ?></td>
                                                    <td><?= $business['rental_count'] ?></td>
                                                    <td><?= formatLargeNumber($business['total_expenses'], 2) ?></td>
                                                    <td><?= $business['active_drivers'] ?></td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div> <!-- .card end -->
                    </div>
                </div> <!-- .row end -->
            </div>

        </div>
    </div>
    <script src="/assets/js/theme.js"></script>

    <!-- Resources -->
    <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
    <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

    <script>
        var revenueTrendCombined = <?php echo $revenueTrendCombinedJson; ?>;
    </script>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            am5.ready(function () {

                var root = am5.Root.new("revenue-trend");

                root.setThemes([
                    am5themes_Animated.new(root)
                ]);

                var chart = root.container.children.push(
                    am5xy.XYChart.new(root, {
                        panX: true,
                        panY: true,
                        wheelX: "panX",
                        wheelY: "zoomX",
                        pinchZoomX: true
                    })
                );

                var xAxis = chart.xAxes.push(
                    am5xy.DateAxis.new(root, {
                        baseInterval: { timeUnit: "day", count: 1 },
                        renderer: am5xy.AxisRendererX.new(root, {}),
                        tooltip: am5.Tooltip.new(root, {})
                    })
                );

                var yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, {
                        renderer: am5xy.AxisRendererY.new(root, {})
                    })
                );

                const colors = [
                    "#FF5733", "#33C4FF", "#28a745", "#ffc107", "#6f42c1", "#e83e8c", "#20c997", "#fd7e14"
                ];

                let colorIndex = 0;

                function transformData(data) {
                    return data.map(entry => ({
                        date: new Date(entry.date).getTime(),
                        value: parseFloat(entry.total)
                    }));
                }

                function addSeries(name, data, color) {
                    var series = chart.series.push(
                        am5xy.LineSeries.new(root, {
                            name: name,
                            xAxis: xAxis,
                            yAxis: yAxis,
                            valueYField: "value",
                            valueXField: "date",
                            tooltip: am5.Tooltip.new(root, {
                                labelText: "{name}: {valueY}"
                            })
                        })
                    );

                    series.strokes.template.setAll({
                        strokeWidth: 2,
                        stroke: am5.color(color)
                    });

                    series.data.setAll(data);

                    series.bullets.push(function () {
                        return am5.Bullet.new(root, {
                            sprite: am5.Circle.new(root, {
                                radius: 4,
                                fill: series.get("fill")
                            })
                        });
                    });

                    series.appear(1000);
                    return series;
                }

                // Add general trend first
                if (revenueTrendCombined.general) {
                    addSeries("General", transformData(revenueTrendCombined.general), colors[colorIndex++ % colors.length]);
                }

                // Add each business line
                revenueTrendCombined.businesses.forEach(b => {
                    addSeries(b.business_name, transformData(b.revenue_trend), colors[colorIndex++ % colors.length]);
                });

                // Legend
                var legend = chart.children.push(am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50
                }));
                legend.data.setAll(chart.series.values);

                // Cursor + Scrollbar
                chart.set("cursor", am5xy.XYCursor.new(root, {
                    behavior: "zoomX"
                }));

                chart.set("scrollbarX", am5.Scrollbar.new(root, {
                    orientation: "horizontal"
                }));

                chart.appear(1000, 100);

            });
        });
    </script>

</body>

</html>