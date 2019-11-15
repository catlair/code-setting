" 避免中文乱码
set fileencodings=utf-8,gb2312,gbk,gb18030
set termencoding=utf-8
set fileformats=unix
"set encoding=prc

" 高亮
syntax on
" 显示行数
set number
set wrap
" TAB 补齐命令
set showcmd
" 鼠标所在行直线
set cursorline
set wildmenu
"设置tab空格数
set softtabstop=4
set tabstop=4
set shiftwidth=4
set noexpandtab
set autoindent
set smarttab

map R :source $MYVIMRC<CR>
map W :w<CR>
map Q :q!<CR>

call plug#begin('~/.vim/plugged')

Plug 'vim-airline/vim-airline'
Plug 'connorholyday/vim-snazzy'
Plug 'neoclide/coc.nvim', {'branch': 'release'}

call plug#end()

colorscheme snazzy
let g:SnazzyTransparent = 1

