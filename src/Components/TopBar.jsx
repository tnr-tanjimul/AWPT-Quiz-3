function TopBar(){
    return(
        <div className="navbar-custom">
			    <div className="container-fluid">
			        <ul className="list-unstyled topnav-menu float-right mb-0">
						
			            <li className="d-none d-lg-block">
			                <form className="app-search" method="get" action="hotspot-users.php">
			                    <div className="app-search-box dropdown">
			                        <div className="input-group">
			                            <input type="search" name="search" className="form-control" placeholder="Search..." id="top-search"/>
			                            <div className="input-group-append">
			                                <button className="btn" type="submit">
			                                    <i className="fe-search"></i>
											</button>
										</div>
									</div>
									
								</div>
							</form>
						</li>
						
			            <li className="dropdown d-inline-block d-lg-none">
			                <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
			                    <i className="fe-search noti-icon"></i>
							</a>
			                <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
			                    <form className="p-3">
			                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
								</form>
							</div>
						</li>
						
			            <li className="dropdown d-none d-lg-inline-block">
			                <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light" data-toggle="fullscreen" href="#">
			                    <i className="fe-maximize noti-icon"></i>
							</a>
						</li>
						
						
						
			            <li className="dropdown notification-list topbar-dropdown">
			                <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
			                    <i className="fe-bell noti-icon"></i>
			                    <span className="badge badge-danger rounded-circle noti-icon-badge">9</span>
							</a>
			                <div className="dropdown-menu dropdown-menu-right dropdown-lg">
								
			                    {/* item*/}
			                    <div className="dropdown-item noti-title">
			                        <h5 className="m-0">
			                            <span className="float-right">
			                                <a href="" className="text-dark">
			                                    <small>Clear All</small>
											</a>
										</span>Notification
									</h5>
								</div>
								
			                    <div className="noti-scroll" data-simplebar="init">
			                        <div className="simplebar-wrapper" style={{margin: "0px"}}>
			                            <div className="simplebar-height-auto-observer-wrapper">
			                                <div className="simplebar-height-auto-observer"></div>
										</div>
			                            <div className="simplebar-mask">
			                                <div className="simplebar-offset" style={{right: "0px", bottom: "0px"}}>
			                                    <div className="simplebar-content-wrapper" style={{height: "auto", overflow: "hidden"}}>
			                                        <div className="simplebar-content" style={{padding: "0px"}}>
														
														
														
			                                            {/* item*/}
			                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
			                                                <div className="notify-icon">
			                                                    <img src="assets/images/users/user-4.jpg" className="img-fluid rounded-circle" alt=""/>
															</div>
			                                                <p className="notify-details">Karen Robinson</p>
			                                                <p className="text-muted mb-0 user-msg">
			                                                    <small>Wow ! this admin looks good and awesome design</small>
															</p>
														</a>
														
			                                            {/* item*/}
			                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
			                                                <div className="notify-icon bg-warning">
			                                                    <i className="mdi mdi-account-plus"></i>
															</div>
			                                                <p className="notify-details">New user registered.
			                                                    <small className="text-muted">5 hours ago</small>
															</p>
														</a>
														
														
														
			                                            {/* item*/}
			                                            <a href="javascript:void(0);" className="dropdown-item notify-item">
			                                                <div className="notify-icon bg-secondary">
			                                                    <i className="mdi mdi-heart"></i>
															</div>
			                                                <p className="notify-details">Carlos Crouch liked
			                                                    <b>Admin</b>
			                                                    <small className="text-muted">13 days ago</small>
															</p>
														</a>
													</div>
												</div>
											</div>
										</div>
			                            <div className="simplebar-placeholder" style={{width: "0px", height: "0px"}}></div>
									</div>
			                        <div className="simplebar-track simplebar-horizontal" style={{visibility: "hidden"}}>
			                            <div className="simplebar-scrollbar" style={{width: "0px", display: "none"}}></div>
									</div>
			                        <div className="simplebar-track simplebar-vertical" style={{visibility: "hidden"}}>
			                            <div className="simplebar-scrollbar" style={{height: "0px", display: "none"}}></div>
									</div>
								</div>
								
			                    {/* All*/}
			                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary notify-item notify-all">
			                        View all
			                        <i className="fe-arrow-right"></i>
								</a>
								
							</div>
						</li>
						
			            <li className="dropdown notification-list topbar-dropdown">
			                <a className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
			                    <img src="https://apwt.tnrsoft.com/assets/images/users/user-5.jpg" alt="user-image" className="rounded-circle"/>
			                    <span className="pro-user-name ml-1">
									Tanjimul Sumaya  
									<i className="mdi mdi-chevron-down"></i>
								</span>
							</a>
			                <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
			                    {/* item*/}
			                    <div className="dropdown-header noti-title">
			                        <h6 className="text-overflow m-0">Welcome !</h6>
								</div>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item notify-item">
			                        <i className="fe-user"></i>
			                        <span>My Account</span>
								</a>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item notify-item">
			                        <i className="fe-settings"></i>
			                        <span>Settings</span>
								</a>
								
			                    {/* item*/}
			                    <a href="password-change.php" className="dropdown-item notify-item">
			                        <i className="fe-lock"></i>
			                        <span>Password Change</span>
								</a>
								
			                    <div className="dropdown-divider"></div>
								
			                    {/* item*/}
			                    <a href="https://apwt.tnrsoft.com/logout" className="dropdown-item notify-item">
			                        <i className="fe-log-out"></i>
			                        <span>Logout</span>
								</a>
								
							</div>
						</li>
						
			            <li className="dropdown notification-list">
			                <a href="javascript:void(0);" className="nav-link right-bar-toggle waves-effect waves-light">
			                    <i className="fe-settings noti-icon"></i>
							</a>
						</li>
						
					</ul>
					
			        {/* LOGO */}
			        <div className="logo-box">
			            <a href="index.php" className="logo logo-dark text-center">
			                <span className="logo-sm">
			                    <img src="https://apwt.tnrsoft.com/assets/images/logo-sm.png" alt="" height="22"/>
			                    {/* <span className="logo-lg-text-light">UBold</span> */}
							</span>
			                <span className="logo-lg">
			                    <img src="https://apwt.tnrsoft.com/assets/images/logo-dark.png" alt="" height="20"/>
			                    {/* <span className="logo-lg-text-light">U</span> */}
							</span>
						</a>
						
			            <a href="index.php" className="logo logo-light text-center">
			                <span className="logo-sm">
			                    <img src="https://apwt.tnrsoft.com/assets/images/logo-sm.png" alt="" height="22"/>
							</span>
			                <span className="logo-lg">
			                    <img src="https://apwt.tnrsoft.com/assets/images/logo-light.png" alt="" height="28"/>
							</span>
						</a>
					</div>
					
			        <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
			            <li>
			                <button className="button-menu-mobile waves-effect waves-light">
			                    <i className="fe-menu"></i>
							</button>
						</li>
						
			            <li>
			                {/* Mobile menu toggle (Horizontal Layout)*/}
			                <a className="navbar-toggle nav-link" data-toggle="collapse" data-target="#topnav-menu-content">
			                    <div className="lines">
			                        <span></span>
			                        <span></span>
			                        <span></span>
								</div>
							</a>
			                {/* End mobile menu toggle*/}
						</li>
						
			            <li className="dropdown d-none d-xl-block">
			                <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
			                    Create New
			                    <i className="mdi mdi-chevron-down"></i>
							</a>
			                <div className="dropdown-menu">
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item">
			                        <i className="fe-briefcase mr-1"></i>
			                        <span>New Projects</span>
								</a>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item">
			                        <i className="fe-user mr-1"></i>
			                        <span>Create Users</span>
								</a>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item">
			                        <i className="fe-bar-chart-line- mr-1"></i>
			                        <span>Revenue Report</span>
								</a>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item">
			                        <i className="fe-settings mr-1"></i>
			                        <span>Settings</span>
								</a>
								
			                    <div className="dropdown-divider"></div>
								
			                    {/* item*/}
			                    <a href="javascript:void(0);" className="dropdown-item">
			                        <i className="fe-headphones mr-1"></i>
			                        <span>Help &amp; Support</span>
								</a>
								
							</div>
						</li>
						
			            <li className="dropdown dropdown-mega d-none d-xl-block">
			                <a className="nav-link dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
			                    Mega Menu
			                    <i className="mdi mdi-chevron-down"></i>
							</a>
			                <div className="dropdown-menu dropdown-megamenu">
			                    <div className="row">
			                        <div className="col-sm-8">
										
			                            <div className="row">
			                                <div className="col-md-4">
			                                    <h5 className="text-dark mt-0">UI Components</h5>
			                                    <ul className="list-unstyled megamenu-list">
			                                        <li>
			                                            <a href="javascript:void(0);">Widgets</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Nestable List</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Range Sliders</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Masonry Items</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Sweet Alerts</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Treeview Page</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Tour Page</a>
													</li>
												</ul>
											</div>
											
			                                <div className="col-md-4">
			                                    <h5 className="text-dark mt-0">Applications</h5>
			                                    <ul className="list-unstyled megamenu-list">
			                                        <li>
			                                            <a href="javascript:void(0);">eCommerce Pages</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">CRM Pages</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Email</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Calendar</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Team Contacts</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Task Board</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Email Templates</a>
													</li>
												</ul>
											</div>
											
			                                <div className="col-md-4">
			                                    <h5 className="text-dark mt-0">Extra Pages</h5>
			                                    <ul className="list-unstyled megamenu-list">
			                                        <li>
			                                            <a href="javascript:void(0);">Left Sidebar with User</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Menu Collapsed</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Small Left Sidebar</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">New Header Style</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Search Result</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Gallery Pages</a>
													</li>
			                                        <li>
			                                            <a href="javascript:void(0);">Maintenance &amp; Coming Soon</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
			                        <div className="col-sm-4">
			                            <div className="text-center mt-3">
			                                <h3 className="text-dark">Special Discount Sale!</h3>
			                                <h4>Save up to 70% off.</h4>
			                                <button className="btn btn-primary btn-rounded mt-3">Download Now</button>
										</div>
									</div>
								</div>
								
							</div>
						</li>
					</ul>
			        <div className="clearfix"></div>
				</div>
			</div>
    );
}
export default TopBar;