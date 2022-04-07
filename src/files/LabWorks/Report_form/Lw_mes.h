#ifndef lw_mes
#define lw_mes

#define WM_LABWORKS (WM_APP + 476)

struct TLWStrct
{
  Cardinal Msg;
  Word Command;
  Word Unused;
  Longint Parameter;
  Longint Result;
};

#define SEND_WORKNUM          1
#define START_SENDING_DATA    2
#define END_SENDING_DATA      3
#define CONFIRM               4
#define DATA                  5
#define EXIT                  6
#define REPORT_OPENED         7
#define PIC1_SEND             8
#define PIC2_SEND             9
#define PIC3_SEND             10
#define REP_REQUEST           11

#endif
