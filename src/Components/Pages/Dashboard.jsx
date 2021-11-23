import Footer from "../Footer";

function Dashboard(){
    return(
        <div className="content-page">
                <div className="content">
					
                    
					<div className="container-fluid">
						
						{/* start page title */}
						<div className="row">
							<div className="col-12">
								<div className="page-title-box">
									<div className="page-title-right">
										<form className="form-inline">
											<div className="form-group">
												<div className="input-group input-group-sm">
													<input type="text" className="form-control border-0" id="dash-daterange"/>
													<div className="input-group-append">
														<span className="input-group-text bg-blue border-blue text-white">
															<i className="mdi mdi-calendar-range"></i>
														</span>
													</div>
												</div>
											</div>
											<a href="javascript: void(0);" className="btn btn-blue btn-sm ml-2">
												<i className="mdi mdi-autorenew"></i>
											</a>
											<a href="javascript: void(0);" className="btn btn-blue btn-sm ml-1">
												<i className="mdi mdi-filter-variant"></i>
											</a>
										</form>
									</div>
									<h4 className="page-title">Dashboard</h4>
								</div>
							</div>
						</div>
						{/* end page title */}
						
						<div className="row">
							
							
							
							<div className="col-12">
							</div>
							
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-info border-info border shadow">
												<i className="fe-users font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="mt-1"><span data-plugin="counterup">987</span></h3>
												<p className="text-muted mb-1 text-truncate">Total Client</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-success border-success border shadow">
												<i className="fe-user-check font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="mt-1"><span data-plugin="counterup">148</span></h3>
												<p className="text-muted mb-1 text-truncate">Active Client</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-warning border-warning border shadow">
												<i className="fe-user-x font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="mt-1"><span data-plugin="counterup">662</span></h3>
												<p className="text-muted mb-1 text-truncate">Inactive Client</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-danger border-danger border shadow">
												<i className="fe-user-minus font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="mt-1"><span data-plugin="counterup">177</span></h3>
												<p className="text-muted mb-1 text-truncate">Left/Pending Client</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-pink border-pink border shadow">
												<i className="fe-shopping-cart font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="text-dark mt-1"><span data-plugin="counterup">118</span></h3>
												<p className="text-muted mb-1 text-truncate">Personal Invoice</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-info border-info border shadow">
												<i className="fe-bar-chart-line- font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="text-dark mt-1"><span data-plugin="counterup">0</span>Tk</h3>
												<p className="text-muted mb-1 text-truncate">Personal Invoice Amount</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-primary border-primary border shadow">
												<i className="fe-heart font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												<h3 className="mt-1"><span data-plugin="counterup">0</span>Tk</h3>
												<p className="text-muted mb-1 text-truncate">Personal Balance</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
							
							<div className="col-md-6 col-xl-3">
								<div className="widget-rounded-circle card-box">
									<div className="row">
										<div className="col-6">
											<div className="avatar-lg rounded-circle bg-warning border-warning border shadow">
												<i className="fe-eye font-22 avatar-title text-white"></i>
											</div>
										</div>
										<div className="col-6">
											<div className="text-right">
												
												<h3 className="text-dark mt-1"><span data-plugin="counterup">0</span>Tk</h3>
												<p className="text-muted mb-1 text-truncate">Personal Commission</p>
											</div>
										</div>
									</div> {/* end row*/}
								</div> {/* end widget-rounded-circle*/}
							</div> {/* end col*/}
						</div>
						{/* end row*/}
						
						
						
						
					</div>
					
				</div> 
                {/* content */}
				
                
				{/* Footer Start */}
				<Footer></Footer>
				{/* end Footer */}                
               
				
			</div>
			
    );
}

export default Dashboard;