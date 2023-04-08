import './style.css';


function Header() {
    return (
        <>
            <div id="page-container">
                <div id="top-header">
                    <div className="container clearfix">
                        <div id="et-info">
                        </div>
                        <div id="et-secondary-menu">
                            <i className="fa fa-whatsapp" aria-hidden="true" />
                            <span id="my_whatsapp">
                                <a href="https://web.whatsapp.com/send?phone=+91 8750731943">+91 8750731943</a>
                            </span>
                            <i className="fa-solid fa-phone" />
                            <span id="my_whatsapp">
                                <a href="tel:+91 8750731943">+91 8750731943</a>
                            </span>
                            <a href="mailto:digitech.com"><span id="et-info-email">digitech.com</span></a>
                        </div>
                    </div>
                </div>
                <header id="main-header" data-height-onload={66}>
                    <div className="container clearfix et_menu_container">
                        <div className="logo_container">
                            <span className="logo_helper" />
                            <a href>
                                <img src="wp-content/uploads/2019/10/TECH.png" alt="Radiant Techlearning" id="logo" data-height-percentage={54} />
                            </a>
                        </div>
                        <div id="et-top-navigation" data-height={66} data-fixed-height={40}>
                            <nav id="top-menu-nav">
                                <ul id="top-menu" className="nav">
                                    <li id="menu-item-248188" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item menu-item-248188"><a href aria-current="page">Home</a></li>
                                    <li id="menu-item-3386" className="first-level menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3386"><a href="#">Technology &amp; Certification</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-251506" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-251506"><a href="test1/">MICROSOFT</a></li>
                                            <li id="menu-item-251871" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-251871"><a href="aws-new/">AWS</a></li>
                                            <li id="menu-item-251987" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-251987"><a href="infromatica-new/">INFORMATICA</a></li>
                                            <li id="menu-item-243841" className="second-level menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-243841"><a href="#">Salesforce</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-243840" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243840"><a href="salesforce-admin/">Salesforce Admin</a></li>
                                                    <li id="menu-item-243838" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243838"><a href="salesforce-developer/">Salesforce Developer</a></li>
                                                    <li id="menu-item-243839" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243839"><a href="salesforce-business-user/">Salesforce Business User</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-243529" className="second-level menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-243529"><a href="#">Oracle</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-244421" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244421"><a href="#">Database</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244427"><a href="databases/oracle-database/">Oracle Database</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-244422" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244422"><a href="#">Java</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244428" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244428"><a href="java/">Java</a></li>
                                                            <li id="menu-item-244429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244429"><a href="database-application-development/">Database Application Development</a></li>
                                                            <li id="menu-item-244466" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244466"><a href="mysql/">Mysql</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-244423" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244423"><a href="#">Applications</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244467" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244467"><a href="e-business-suite/">E-Business Suite</a></li>
                                                            <li id="menu-item-244468" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244468"><a href="hyperion/">Hyperion</a></li>
                                                            <li id="menu-item-244469" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244469"><a href="jd-edwards-enterpriseone/">JD Edwards EnterpriseOne</a></li>
                                                            <li id="menu-item-244470" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244470"><a href="oracle-commerce-atg-endeca/">Oracle Commerce (ATG, Endeca)</a></li>
                                                            <li id="menu-item-244471" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244471"><a href="peoplesoft/">Peoplesoft</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-244424" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244424"><a href="#">Middleware</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244472" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244472"><a href="cloud-application-foundation/">Cloud Application Foundation</a></li>
                                                            <li id="menu-item-244473" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244473"><a href="data-integration/">Data Integration</a></li>
                                                            <li id="menu-item-244474" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244474"><a href="middleware-development-tools/">Middleware Development Tools</a></li>
                                                            <li id="menu-item-244475" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244475"><a href="soa-and-bpm/">SOA and BPM</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-244425" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244425"><a href="#">Enterprise Management</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244476" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244476"><a href="oracle-enterprise-manager/">Oracle Enterprise Manager</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-244426" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244426"><a href="#">Operating Systems</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-244477" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244477"><a href="oracle-linux/">Oracle Linux</a></li>
                                                            <li id="menu-item-244478" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244478"><a href="oracle-solaris/">Oracle Solaris</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-244011" className="second-level menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-244011"><a href="#">IBM</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-243986" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243986"><a href="analytics/">Analytics</a></li>
                                                    <li id="menu-item-243985" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243985"><a href="cloud/">Cloud</a></li>
                                                    <li id="menu-item-243982" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243982"><a href="security-system/">Security &amp; System</a></li>
                                                    <li id="menu-item-243984" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-243984"><a href="watson-watson-iot/">Watson &amp; Watson IoT</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-3408" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3408"><a href="redhat/">Redhat</a></li>
                                            <li id="menu-item-246322" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-246322"><a href="#">SAP</a>
                                                <ul className="sub-menu">
                                                    <li id="menu-item-246257" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-246257"><a href="#">Cloud</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-246260" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246260"><a href="sap-ariba/">SAP Ariba</a></li>
                                                            <li id="menu-item-246261" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246261"><a href="sap-cloud-platform/">SAP Cloud Platform</a></li>
                                                            <li id="menu-item-246262" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246262"><a href="sap-customer-experience-c-4hana/">SAP Customer Experience (C/4HANA)</a></li>
                                                            <li id="menu-item-246263" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246263"><a href="sap-leonardo/">SAP Leonardo</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-246258" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-246258"><a href="#">Database &amp; Technology</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-246268" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246268"><a href="sap-administration/">Administration</a></li>
                                                            <li id="menu-item-246269" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246269"><a href="sap-development/">Development</a></li>
                                                            <li id="menu-item-246270" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246270"><a href="sap-security-authorization/">Security &amp; Authorization</a></li>
                                                            <li id="menu-item-246271" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246271"><a href="sap-solution-manager/">Solution Manager</a></li>
                                                            <li id="menu-item-246272" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246272"><a href="sap-integration/">Integration</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-246259" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-246259"><a href="#">SAP Analytics</a>
                                                        <ul className="sub-menu">
                                                            <li id="menu-item-246490" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246490"><a href="sap-business-intelligence/">Business Intelligence</a></li>
                                                            <li id="menu-item-246491" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246491"><a href="sap-business-warehouse/">Business Warehouse</a></li>
                                                            <li id="menu-item-246492" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246492"><a href="sap-data-warehouse-sap-hana/">Data Warehouse (SAP HANA)</a></li>
                                                        </ul>
                                                    </li>
                                                    <li id="menu-item-246256" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-246256"><a href="sap-applications/">Applications</a></li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-3404" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3404"><a href="pmp/">PMP</a></li>
                                            <li id="menu-item-243816" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-243816"><a href="juniper/">Juniper</a></li>
                                            <li id="menu-item-243821" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-243821"><a href="citrix/">Citrix</a></li>
                                            <li id="menu-item-243876" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-243876"><a href="ec-council/">EC Council</a></li>
                                            <li id="menu-item-249310" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-249310"><a href="cisco/">Cisco</a></li>
                                            <li id="menu-item-249311" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-249311"><a href="vmware/">VMware</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-3387" className="first-level menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3387"><a href="#">Specialisation</a>
                                        <ul className="sub-menu">
                                            <li id="menu-item-3402" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3402"><a href="cloud-computing/">Cloud Computing</a></li>
                                            <li id="menu-item-243384" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-243384"><a href="artificial-intelligence-and-machine-learning/">AI &amp; ML</a></li>
                                            <li id="menu-item-3401" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3401"><a href="data-science-and-analytics/">Data Science &amp; Analytics</a></li>
                                            <li id="menu-item-3400" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3400"><a href="big-data/">Big Data</a></li>
                                            <li id="menu-item-3398" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3398"><a href="bi-visualisation/">BI &amp; Visualisation</a></li>
                                            <li id="menu-item-3397" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3397"><a href="programming-development/">Programming &amp; Development</a></li>
                                            <li id="menu-item-3396" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3396"><a href="devops/">DevOps</a></li>
                                            <li id="menu-item-3395" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3395"><a href="databases/">Databases</a></li>
                                            <li id="menu-item-3394" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3394"><a href="operating-system/">Operating System</a></li>
                                            <li id="menu-item-3393" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3393"><a href="software-testing/">Software Testing</a></li>
                                            <li id="menu-item-3392" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3392"><a href="cyber-security/">Cyber Security</a></li>
                                            <li id="menu-item-3391" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3391"><a href="mobile-development/">Mobile Development</a></li>
                                            <li id="menu-item-3389" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3389"><a href="agile-scrum/">Agile &amp; SCRUM</a></li>
                                            <li id="menu-item-3388" className="second-level menu-item menu-item-type-post_type menu-item-object-page menu-item-3388"><a href="it-services-architecture/">IT Services &amp; Architecture</a></li>
                                            <li id="menu-item-247440" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-247440"><a href="data-management-integration/">Data Management &amp; Integration</a></li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-244734" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-244734"><a href="calendars/">Calendar</a></li>
                                    <li id="menu-item-248955" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-248955"><a href="custom-page/">About Us</a></li>
                                    <li id="menu-item-249299" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-249299"><a href="blog-2/">Blog</a></li>
                                    <li id="menu-item-3186" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3186"><a href="contact-us/">Contact Us</a></li>
                                </ul>
                            </nav>
                            <div id="et_mobile_nav_menu">
                                <div className="mobile_nav closed">
                                    <span className="select_page">Select Page</span>
                                    <span className="mobile_menu_bar mobile_menu_bar_toggle" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="et_search_outer">
                        <div className="container et_search_form_container">
                            <form role="search" method="get" className="et-search-form" action>
                                <input type="search" className="et-search-field" placeholder="Search …" defaultValue name="s" title="Search for:" /> </form>
                            <span className="et_close_search_field" />
                        </div>
                    </div>
                </header>
            </div>



     
        </>
    )
}
export default Header