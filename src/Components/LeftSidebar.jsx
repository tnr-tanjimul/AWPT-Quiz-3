
function LeftSideBar(){
    return(
        <div className="left-side-menu">
				
				<div className="h-100 menuitem-active" data-simplebar="init">
					<div className="simplebar-wrapper" style={{margin: "0px"}}>
						<div className="simplebar-height-auto-observer-wrapper">
							<div className="simplebar-height-auto-observer"></div>
						</div>
						<div className="simplebar-mask">
							<div className="simplebar-offset" style={{right: "0px", bottom: "0px"}}>
								<div className="simplebar-content-wrapper" style={{height: "100%",overflow: "hidden scroll"}}>
									<div className="simplebar-content" style={{padding: "0px"}}>
										
										{/* User box */}
										<div className="user-box text-center">
											<img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle avatar-md"/>
											<div className="dropdown">
												<a href="javascript: void(0);"
												className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
												data-toggle="dropdown">Geneva Kennedy</a>
												<div className="dropdown-menu user-pro-dropdown">
													
													{/* item*/}
													<a href="javascript:void(0);" className="dropdown-item notify-item">
														<i className="fe-user mr-1"></i>
														<span>My Account</span>
													</a>
													
													{/* item*/}
													<a href="javascript:void(0);" className="dropdown-item notify-item">
														<i className="fe-settings mr-1"></i>
														<span>Settings</span>
													</a>
													
													{/* item*/}
													<a href="javascript:void(0);" className="dropdown-item notify-item">
														<i className="fe-lock mr-1"></i>
														<span>Lock Screen</span>
													</a>
													
													{/* item*/}
													<a href="javascript:void(0);" className="dropdown-item notify-item">
														<i className="fe-log-out mr-1"></i>
														<span>Logout</span>
													</a>
													
												</div>
											</div>
											<p className="text-muted">Admin Head</p>
										</div>
										
										{/*- Sidemenu */}
										<div id="sidebar-menu" className="show">
											
											<ul id="side-menu">
												
												<li className="menu-title">Navigation</li>
												
												<li className="menuitem-active">
													<a href="index.php" className="active">
														<i className="mdi mdi-view-dashboard-outline"></i>
														<span> Dashboard </span>
													</a>
												</li>
												
												<li>
													<a href="#client-billing" data-toggle="collapse">
														<i className="mdi mdi-account-cash"></i>
														<span> Billing </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="client-billing">
														<ul className="nav-second-level">
															<li><a href="client-accounts.php">All Accounts</a></li>
														</ul>
														
														<ul className="nav-second-level">
															<li><a href="client-invoices.php">Invoices</a></li>
														</ul>
													</div>
												</li>
												
												
												<li className="menu-title mt-2">PPPoE</li>
												
												<li>
													<a href="#pppoe1" data-toggle="collapse">
														<i className="mdi mdi-account-multiple-outline"></i>
														<span> Client </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="pppoe1">
														<ul className="nav-second-level">
															<li><a href="pppoe-client-add.php">Add New</a></li>
															<li> <a href="pppoe-client-renew.php">Renew</a></li>
														</ul>
													</div>
												</li>
												
												
												<li>
													<a href="#pppoeSection" data-toggle="collapse">
														<i className="mdi mdi-bullseye"></i>
														<span> PPPoE </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="pppoeSection">
														<ul className="nav-second-level">
															<li><a href="https://apwt.tnrsoft.com/pppoe/users">All Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/pppoe/active">Active Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/pppoe/online">Online Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/pppoe/profiles">Profiles</a></li>
															<li><a href="https://apwt.tnrsoft.com/pppoe/log">Log</a></li>
															<li><a href="https://apwt.tnrsoft.com/pppoe/traffic-monitor">User Traffic</a></li>
														</ul>
													</div>
												</li>
												
												
												
												
												<li className="menu-title mt-2">Hotspot</li>
												
												<li>
													<a href="#hotspot" data-toggle="collapse">
														<i className="mdi mdi-account-multiple-outline"></i>
														<span> Client </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="hotspot">
														<ul className="nav-second-level">
															<li><a href="client-add-retail.php">Add New</a></li>
															<li> <a href="client-renew.php">Renew</a></li>
														</ul>
													</div>
												</li>
												
												
												
												
												
												
												
												
												<li>
													<a href="#sidebarIcons" data-toggle="collapse">
														<i className="mdi mdi-wifi"></i>
														<span> Hotspot </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="sidebarIcons">
														<ul className="nav-second-level">
															
															
															<li><a href="https://apwt.tnrsoft.com/hotspot/users">All Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/active">Active Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/online">Online Users</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/profiles">Profiles</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/log">Log</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/mac-log">Mac Log</a></li>
															<li><a href="https://apwt.tnrsoft.com/hotspot/change-log">Change Log</a></li>
														</ul>
													</div>
												</li>
												
												
												
												<li><a href="https://apwt.tnrsoft.com/hotspot/dhcp-leases">
													<i className="mdi mdi-ballot-recount"></i>
													<span> DHCP Leases </span>
												</a>
												</li>
												
												<li><a href="traffic-monitor.php">
													<i className="mdi mdi-chart-areaspline"></i>
													<span> Traffic Monitor </span>
												</a></li>
												<li className="menu-title mt-2">Configuration</li>
												
												<li><a href="retailer-add.php">
													<i className="mdi mdi-account-convert"></i>
													<span> Retailer </span>
												</a></li>
												<li><a href="merchant_payments.php">
													<i className="mdi mdi-credit-card-clock"></i>
													<span> All Payments </span>
												</a></li>
												
												<li>
													<a href="#h_server" data-toggle="collapse">
														<i className="fa fa-server"></i>
														<span> Server </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="h_server">
														<ul className="nav-second-level">
															<li><a href="https://apwt.tnrsoft.com/watchdog">Watch Dog</a></li>
															<li><a href="https://apwt.tnrsoft.com/server">Mikrotik</a></li>
														</ul>
													</div>
												</li>
												
												<li>
													<a href="#h_Configuration" data-toggle="collapse">
														<i className="fa fa-server"></i>
														<span> Configuration </span>
														<span className="menu-arrow"></span>
													</a>
													<div className="collapse" id="h_Configuration">
														<ul className="nav-second-level">
															<li><a href="https://apwt.tnrsoft.com/zone">Zone</a></li>
															<li><a href="https://apwt.tnrsoft.com/sub-zone">Sub Zone</a></li>
														</ul>
													</div>
												</li>
												
												<li>
													<a href="scc-renew.php">
														<i className="mdi mdi mdi-autorenew"></i>
														<span> Online Renew </span>
													</a>
												</li>
												<li>
													<a href="client-renew2.php">
														<i className="mdi mdi-view-dashboard-outline"></i>
														<span> Special Renew </span>
													</a>
												</li>
												<li>
													<a href="icc-renew.php">
														<i className="mdi mdi-view-dashboard-outline"></i>
														<span> ICC Hotspot </span>
													</a>
												</li>
												
												
												
												<li><a href="https://apwt.tnrsoft.com/company">
													<i className="mdi mdi-ballot-recount"></i>
													<span> Company </span>
												</a>
												</li>
												
												
												<li><a href="https://apwt.tnrsoft.com/admin/user">
													<i className="mdi mdi-ballot-recount"></i>
													<span> All Users </span>
												</a>
												</li>
												
												
												
												
												
												
												
												
												
												
												
												
											</ul>
											
										</div>
										{/* End Sidebar */}
										
										<div className="clearfix"></div>
										
									</div>
								</div>
							</div>
						</div>
						<div className="simplebar-placeholder" style={{width: "auto", height: "872px"}}></div>
					</div>
					<div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}>
						<div className="simplebar-scrollbar" style={{width: "0px", display: "none"}}></div>
					</div>
					<div className="simplebar-track simplebar-vertical" style={{visibility: "visible"}}>
						<div className="simplebar-scrollbar"
						style={{height: "51px", transform: "translate3d(0px, 0px, 0px)", display: "block"}}></div>
					</div>
				</div>
				{/* Sidebar -left */}
				
			</div>           
			
    );
}
export default LeftSideBar;