const nameStr = 'case_id	app_id	are_id	bank_nbr	cardnbr	cust_nbr	casetype	subcasetype	re_appr_flg	re_appr_ocaseid	channel	project	urgentlvl	dispute_flg	dispute	smsnotice	smsnbr	force_transfer_flg	transferrsn	reserve_flg	reservetime	apply_memo	transmit_memo	incomingtel	repeat_app_flg	creator	create_time	due_finish_time	sgt_transmit_rst	sgt_approve_rst	app_transmit_rst	status	approve_rst	reject_cde	release_cde	trace_cde	reminder_flg	reminder_creator	approve_time	approver	approver_sen	approver_trd	colse_time	cust_group_code	category_id	approver_onestop	approver_fst	approver_chk	system_status	abnormal_colse_rsn	approval_node	closure_sms_template	blacklist_flag	graylist_flag	redlist_flag	urgent_selected	app_cdms_sn	are_cdms_sn	accept_are_id	case_group_id	cust_name	rule_caseresult	rule_transferresult	rule_result_time	cdms_leafnodeid	cust_level	sbookid	ordernbr	bbookid	approval_trace	mark	cdms_leafnodename	locked_user	assignee	src_case_id	cdms_caseresult	cdms_transferresult	except_rule_caseresult	rule_force_transfer	except_rule_transferreulst	sis_worker_numbers	sis_list_numbers	sis_list_item_numbers	pd_id	result_code	error_code	approve_status	multi_bank_count	sms_batch_id	cust_id_nbr	lst_approver	map_rule	michelleid	batchnbr	xw_finished_time	risk_level	delay_close_time	commercialcard	cdms_hitrsncode	close_case_status	send_request_time	received_respone_time	batch_flag	wrong_case_flag	is_manual_close_case	manual_case_closer	is_card_active	is_upload_att	insttype_nbr	map_mrule	expired_date	score_rst	rejected_count_in2mth	rejected_count_in6mth	HAS_LOANCONTRACTS	PRE_CASEID	agent_pay_rst	GRADUATE	CHANNEL_CTROL	BUSSINESSMAN_CODE	p2p_relase_flag	session_nbr	cust_mobile	hangup_flag	sesame	applicationAmount	applicationAmountTodayToltal	applicationAmountTodayToltalAgree	applicationAmountTodayToltalReject	applicationAmountTodayNumber	applicationAmountTodayNumberAgree	applicationAmountTodayNumberReject	noEndAppFlg	rejectDays	noEndAppFlg6000	pdf_is_existence	noEndAppFlg8000	pdf_is_upload	credit_approve_type	register_date	open_account_date	permanent_addr	call_est_success	est_result_code';
const updateStr = '20181205201703672425	20181205201718609389	20181205201800171203	NULL	NULL	NULL	7210	7211	NULL	NULL	170	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	SYSTEM	2018-11-27 20:17:19	NULL	1	NULL	1	0	AR	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	1001	NULL	NULL	NULL	NULL	NULL	ONES	NULL	N	N	N	N	NULL	NULL	NULL	NULL	苗冬梅	NULL	NULL	NULL	NULL	PT	NULL	NULL	NULL	NULL	10	NULL	NULL	CS0101R003	20181127110834e758d2	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	0	NULL	NULL	510722198711050024	NULL	NULL	NULL	NULL	NULL	1	NULL	N	NULL	NULL	NULL	NULL	0	NULL	N	NULL	NULL	NULL	NULL	NULL	NULL	0	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	N	9b17e2207a0e465d8315e2e172e594c1	18080269864	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	0	NULL	0	1	NULL	NULL	NULL	Y	NULL';
const sourceStr = '20181205201703672425	20181205201718609389	NULL	NULL	NULL	NULL	7210	7211	NULL	NULL	170	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	SYSTEM	2018-11-27 20:17:19	NULL	1	NULL	1	0	AR	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	1001	NULL	NULL	NULL	NULL	NULL	NULL	NULL	N	N	N	N	NULL	NULL	NULL	NULL	苗冬梅	NULL	NULL	NULL	NULL	PT	NULL	NULL	NULL	NULL	10	NULL	NULL	CS0101R001	20181127110834e758d2	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	0	NULL	NULL	510722198711050024	NULL	NULL	NULL	NULL	NULL	NULL	NULL	N	NULL	NULL	NULL	NULL	0	NULL	N	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	N	NULL	18080269864	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	NULL	0	NULL	0	1	NULL	NULL	NULL	NULL	NULL';

var nameArr = nameStr.split(/\s+/);
var updateArr = updateStr.split(/\s+/);
var sourceArr = sourceStr.split(/\s+/);

console.log('nameArr count: ', nameArr.length);
console.log('updateArr count: ', updateArr.length);
console.log('sourceArr count: ', sourceArr.length);

var names = [];

for (let i = 0; i < updateArr.length; i++) {
  const u = updateArr[i];
  const s = sourceArr[i];
  const n = nameArr[i];

  console.log('i: ' + i + ' ' + n + ' ' + s + ' ' + u);

  if (s == 'NULL' && u != 'NULL') {
    names.push(n);
  }
}

console.log(names);



