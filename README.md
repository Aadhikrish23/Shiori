
```
Shiori
├─ AI-Services
├─ Backend
├─ client
├─ README.md
└─ worker

```
```
Shiori
├─ AI-Services
│  ├─ app
│  │  ├─ config
│  │  │  ├─ settings.py
│  │  │  └─ __pycache__
│  │  │     └─ settings.cpython-311.pyc
│  │  ├─ main.py
│  │  ├─ prompts
│  │  │  ├─ email_classifier.py
│  │  │  ├─ email_summarizer.py
│  │  │  └─ __pycache__
│  │  │     ├─ email_classifier.cpython-311.pyc
│  │  │     └─ email_summarizer.cpython-311.pyc
│  │  ├─ providers
│  │  │  ├─ ollama.py
│  │  │  ├─ openai_provider.py
│  │  │  └─ __pycache__
│  │  │     ├─ ollama.cpython-311.pyc
│  │  │     └─ openai_provider.cpython-311.pyc
│  │  ├─ schemas
│  │  │  ├─ BatchRequest.py
│  │  │  ├─ email.py
│  │  │  └─ __pycache__
│  │  │     ├─ BatchRequest.cpython-311.pyc
│  │  │     └─ email.cpython-311.pyc
│  │  ├─ services
│  │  │  ├─ classifier.py
│  │  │  ├─ summarizer.py
│  │  │  └─ __pycache__
│  │  │     ├─ classifier.cpython-311.pyc
│  │  │     └─ summarizer.cpython-311.pyc
│  │  ├─ utils
│  │  │  ├─ parser.py
│  │  │  └─ __pycache__
│  │  │     └─ parser.cpython-311.pyc
│  │  └─ __pycache__
│  │     └─ main.cpython-311.pyc
│  ├─ requirements.txt
│  └─ venv
│     ├─ Include
│     ├─ Lib
│     │  └─ site-packages
│     │     ├─ 81d243bd2c585b0f4821__mypyc.cp311-win_amd64.pyd
│     │     ├─ annotated_doc
│     │     │  ├─ main.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ main.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ annotated_doc-0.0.4.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ annotated_types
│     │     │  ├─ py.typed
│     │     │  ├─ test_cases.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ test_cases.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ annotated_types-0.7.0.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ anyio
│     │     │  ├─ abc
│     │     │  │  ├─ _eventloop.py
│     │     │  │  ├─ _resources.py
│     │     │  │  ├─ _sockets.py
│     │     │  │  ├─ _streams.py
│     │     │  │  ├─ _subprocesses.py
│     │     │  │  ├─ _tasks.py
│     │     │  │  ├─ _testing.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _eventloop.cpython-311.pyc
│     │     │  │     ├─ _resources.cpython-311.pyc
│     │     │  │     ├─ _sockets.cpython-311.pyc
│     │     │  │     ├─ _streams.cpython-311.pyc
│     │     │  │     ├─ _subprocesses.cpython-311.pyc
│     │     │  │     ├─ _tasks.cpython-311.pyc
│     │     │  │     ├─ _testing.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ from_thread.py
│     │     │  ├─ functools.py
│     │     │  ├─ lowlevel.py
│     │     │  ├─ py.typed
│     │     │  ├─ pytest_plugin.py
│     │     │  ├─ streams
│     │     │  │  ├─ buffered.py
│     │     │  │  ├─ file.py
│     │     │  │  ├─ memory.py
│     │     │  │  ├─ stapled.py
│     │     │  │  ├─ text.py
│     │     │  │  ├─ tls.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ buffered.cpython-311.pyc
│     │     │  │     ├─ file.cpython-311.pyc
│     │     │  │     ├─ memory.cpython-311.pyc
│     │     │  │     ├─ stapled.cpython-311.pyc
│     │     │  │     ├─ text.cpython-311.pyc
│     │     │  │     ├─ tls.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ to_interpreter.py
│     │     │  ├─ to_process.py
│     │     │  ├─ to_thread.py
│     │     │  ├─ _backends
│     │     │  │  ├─ _asyncio.py
│     │     │  │  ├─ _trio.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _asyncio.cpython-311.pyc
│     │     │  │     ├─ _trio.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _core
│     │     │  │  ├─ _asyncio_selector_thread.py
│     │     │  │  ├─ _contextmanagers.py
│     │     │  │  ├─ _eventloop.py
│     │     │  │  ├─ _exceptions.py
│     │     │  │  ├─ _fileio.py
│     │     │  │  ├─ _resources.py
│     │     │  │  ├─ _signals.py
│     │     │  │  ├─ _sockets.py
│     │     │  │  ├─ _streams.py
│     │     │  │  ├─ _subprocesses.py
│     │     │  │  ├─ _synchronization.py
│     │     │  │  ├─ _tasks.py
│     │     │  │  ├─ _tempfile.py
│     │     │  │  ├─ _testing.py
│     │     │  │  ├─ _typedattr.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _asyncio_selector_thread.cpython-311.pyc
│     │     │  │     ├─ _contextmanagers.cpython-311.pyc
│     │     │  │     ├─ _eventloop.cpython-311.pyc
│     │     │  │     ├─ _exceptions.cpython-311.pyc
│     │     │  │     ├─ _fileio.cpython-311.pyc
│     │     │  │     ├─ _resources.cpython-311.pyc
│     │     │  │     ├─ _signals.cpython-311.pyc
│     │     │  │     ├─ _sockets.cpython-311.pyc
│     │     │  │     ├─ _streams.cpython-311.pyc
│     │     │  │     ├─ _subprocesses.cpython-311.pyc
│     │     │  │     ├─ _synchronization.cpython-311.pyc
│     │     │  │     ├─ _tasks.cpython-311.pyc
│     │     │  │     ├─ _tempfile.cpython-311.pyc
│     │     │  │     ├─ _testing.cpython-311.pyc
│     │     │  │     ├─ _typedattr.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ from_thread.cpython-311.pyc
│     │     │     ├─ functools.cpython-311.pyc
│     │     │     ├─ lowlevel.cpython-311.pyc
│     │     │     ├─ pytest_plugin.cpython-311.pyc
│     │     │     ├─ to_interpreter.cpython-311.pyc
│     │     │     ├─ to_process.cpython-311.pyc
│     │     │     ├─ to_thread.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ anyio-4.13.0.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ certifi
│     │     │  ├─ cacert.pem
│     │     │  ├─ core.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ certifi-2026.2.25.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ charset_normalizer
│     │     │  ├─ api.py
│     │     │  ├─ cd.cp311-win_amd64.pyd
│     │     │  ├─ cd.py
│     │     │  ├─ cli
│     │     │  │  ├─ __init__.py
│     │     │  │  ├─ __main__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ __init__.cpython-311.pyc
│     │     │  │     └─ __main__.cpython-311.pyc
│     │     │  ├─ constant.py
│     │     │  ├─ legacy.py
│     │     │  ├─ md.cp311-win_amd64.pyd
│     │     │  ├─ md.py
│     │     │  ├─ models.py
│     │     │  ├─ py.typed
│     │     │  ├─ utils.py
│     │     │  ├─ version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ api.cpython-311.pyc
│     │     │     ├─ cd.cpython-311.pyc
│     │     │     ├─ constant.cpython-311.pyc
│     │     │     ├─ legacy.cpython-311.pyc
│     │     │     ├─ md.cpython-311.pyc
│     │     │     ├─ models.cpython-311.pyc
│     │     │     ├─ utils.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ charset_normalizer-3.4.7.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ click
│     │     │  ├─ core.py
│     │     │  ├─ decorators.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ formatting.py
│     │     │  ├─ globals.py
│     │     │  ├─ parser.py
│     │     │  ├─ py.typed
│     │     │  ├─ shell_completion.py
│     │     │  ├─ termui.py
│     │     │  ├─ testing.py
│     │     │  ├─ types.py
│     │     │  ├─ utils.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _termui_impl.py
│     │     │  ├─ _textwrap.py
│     │     │  ├─ _utils.py
│     │     │  ├─ _winconsole.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core.cpython-311.pyc
│     │     │     ├─ decorators.cpython-311.pyc
│     │     │     ├─ exceptions.cpython-311.pyc
│     │     │     ├─ formatting.cpython-311.pyc
│     │     │     ├─ globals.cpython-311.pyc
│     │     │     ├─ parser.cpython-311.pyc
│     │     │     ├─ shell_completion.cpython-311.pyc
│     │     │     ├─ termui.cpython-311.pyc
│     │     │     ├─ testing.cpython-311.pyc
│     │     │     ├─ types.cpython-311.pyc
│     │     │     ├─ utils.cpython-311.pyc
│     │     │     ├─ _compat.cpython-311.pyc
│     │     │     ├─ _termui_impl.cpython-311.pyc
│     │     │     ├─ _textwrap.cpython-311.pyc
│     │     │     ├─ _utils.cpython-311.pyc
│     │     │     ├─ _winconsole.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ click-8.3.2.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.txt
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ colorama
│     │     │  ├─ ansi.py
│     │     │  ├─ ansitowin32.py
│     │     │  ├─ initialise.py
│     │     │  ├─ tests
│     │     │  │  ├─ ansitowin32_test.py
│     │     │  │  ├─ ansi_test.py
│     │     │  │  ├─ initialise_test.py
│     │     │  │  ├─ isatty_test.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ winterm_test.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ ansitowin32_test.cpython-311.pyc
│     │     │  │     ├─ ansi_test.cpython-311.pyc
│     │     │  │     ├─ initialise_test.cpython-311.pyc
│     │     │  │     ├─ isatty_test.cpython-311.pyc
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     ├─ winterm_test.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ win32.py
│     │     │  ├─ winterm.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ ansi.cpython-311.pyc
│     │     │     ├─ ansitowin32.cpython-311.pyc
│     │     │     ├─ initialise.cpython-311.pyc
│     │     │     ├─ win32.cpython-311.pyc
│     │     │     ├─ winterm.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ colorama-0.4.6.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.txt
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ distro
│     │     │  ├─ distro.py
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ distro.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ distro-1.9.0.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ distutils-precedence.pth
│     │     ├─ dotenv
│     │     │  ├─ cli.py
│     │     │  ├─ ipython.py
│     │     │  ├─ main.py
│     │     │  ├─ parser.py
│     │     │  ├─ py.typed
│     │     │  ├─ variables.py
│     │     │  ├─ version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ cli.cpython-311.pyc
│     │     │     ├─ ipython.cpython-311.pyc
│     │     │     ├─ main.cpython-311.pyc
│     │     │     ├─ parser.cpython-311.pyc
│     │     │     ├─ variables.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ fastapi
│     │     │  ├─ .agents
│     │     │  │  └─ skills
│     │     │  │     └─ fastapi
│     │     │  │        ├─ references
│     │     │  │        │  ├─ dependencies.md
│     │     │  │        │  ├─ other-tools.md
│     │     │  │        │  └─ streaming.md
│     │     │  │        └─ SKILL.md
│     │     │  ├─ applications.py
│     │     │  ├─ background.py
│     │     │  ├─ cli.py
│     │     │  ├─ concurrency.py
│     │     │  ├─ datastructures.py
│     │     │  ├─ dependencies
│     │     │  │  ├─ models.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ models.cpython-311.pyc
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ encoders.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ exception_handlers.py
│     │     │  ├─ logger.py
│     │     │  ├─ middleware
│     │     │  │  ├─ asyncexitstack.py
│     │     │  │  ├─ cors.py
│     │     │  │  ├─ gzip.py
│     │     │  │  ├─ httpsredirect.py
│     │     │  │  ├─ trustedhost.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asyncexitstack.cpython-311.pyc
│     │     │  │     ├─ cors.cpython-311.pyc
│     │     │  │     ├─ gzip.cpython-311.pyc
│     │     │  │     ├─ httpsredirect.cpython-311.pyc
│     │     │  │     ├─ trustedhost.cpython-311.pyc
│     │     │  │     ├─ wsgi.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ openapi
│     │     │  │  ├─ constants.py
│     │     │  │  ├─ docs.py
│     │     │  │  ├─ models.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ constants.cpython-311.pyc
│     │     │  │     ├─ docs.cpython-311.pyc
│     │     │  │     ├─ models.cpython-311.pyc
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ params.py
│     │     │  ├─ param_functions.py
│     │     │  ├─ py.typed
│     │     │  ├─ requests.py
│     │     │  ├─ responses.py
│     │     │  ├─ routing.py
│     │     │  ├─ security
│     │     │  │  ├─ api_key.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ http.py
│     │     │  │  ├─ oauth2.py
│     │     │  │  ├─ open_id_connect_url.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ api_key.cpython-311.pyc
│     │     │  │     ├─ base.cpython-311.pyc
│     │     │  │     ├─ http.cpython-311.pyc
│     │     │  │     ├─ oauth2.cpython-311.pyc
│     │     │  │     ├─ open_id_connect_url.cpython-311.pyc
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ sse.py
│     │     │  ├─ staticfiles.py
│     │     │  ├─ templating.py
│     │     │  ├─ testclient.py
│     │     │  ├─ types.py
│     │     │  ├─ utils.py
│     │     │  ├─ websockets.py
│     │     │  ├─ _compat
│     │     │  │  ├─ shared.py
│     │     │  │  ├─ v2.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ shared.cpython-311.pyc
│     │     │  │     ├─ v2.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ applications.cpython-311.pyc
│     │     │     ├─ background.cpython-311.pyc
│     │     │     ├─ cli.cpython-311.pyc
│     │     │     ├─ concurrency.cpython-311.pyc
│     │     │     ├─ datastructures.cpython-311.pyc
│     │     │     ├─ encoders.cpython-311.pyc
│     │     │     ├─ exceptions.cpython-311.pyc
│     │     │     ├─ exception_handlers.cpython-311.pyc
│     │     │     ├─ logger.cpython-311.pyc
│     │     │     ├─ params.cpython-311.pyc
│     │     │     ├─ param_functions.cpython-311.pyc
│     │     │     ├─ requests.cpython-311.pyc
│     │     │     ├─ responses.cpython-311.pyc
│     │     │     ├─ routing.cpython-311.pyc
│     │     │     ├─ sse.cpython-311.pyc
│     │     │     ├─ staticfiles.cpython-311.pyc
│     │     │     ├─ templating.cpython-311.pyc
│     │     │     ├─ testclient.cpython-311.pyc
│     │     │     ├─ types.cpython-311.pyc
│     │     │     ├─ utils.cpython-311.pyc
│     │     │     ├─ websockets.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ fastapi-0.135.3.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  └─ WHEEL
│     │     ├─ h11
│     │     │  ├─ py.typed
│     │     │  ├─ _abnf.py
│     │     │  ├─ _connection.py
│     │     │  ├─ _events.py
│     │     │  ├─ _headers.py
│     │     │  ├─ _readers.py
│     │     │  ├─ _receivebuffer.py
│     │     │  ├─ _state.py
│     │     │  ├─ _util.py
│     │     │  ├─ _version.py
│     │     │  ├─ _writers.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ _abnf.cpython-311.pyc
│     │     │     ├─ _connection.cpython-311.pyc
│     │     │     ├─ _events.cpython-311.pyc
│     │     │     ├─ _headers.cpython-311.pyc
│     │     │     ├─ _readers.cpython-311.pyc
│     │     │     ├─ _receivebuffer.cpython-311.pyc
│     │     │     ├─ _state.cpython-311.pyc
│     │     │     ├─ _util.cpython-311.pyc
│     │     │     ├─ _version.cpython-311.pyc
│     │     │     ├─ _writers.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ h11-0.16.0.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.txt
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ httpcore
│     │     │  ├─ py.typed
│     │     │  ├─ _api.py
│     │     │  ├─ _async
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ connection_pool.py
│     │     │  │  ├─ http11.py
│     │     │  │  ├─ http2.py
│     │     │  │  ├─ http_proxy.py
│     │     │  │  ├─ interfaces.py
│     │     │  │  ├─ socks_proxy.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-311.pyc
│     │     │  │     ├─ connection_pool.cpython-311.pyc
│     │     │  │     ├─ http11.cpython-311.pyc
│     │     │  │     ├─ http2.cpython-311.pyc
│     │     │  │     ├─ http_proxy.cpython-311.pyc
│     │     │  │     ├─ interfaces.cpython-311.pyc
│     │     │  │     ├─ socks_proxy.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _backends
│     │     │  │  ├─ anyio.py
│     │     │  │  ├─ auto.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ mock.py
│     │     │  │  ├─ sync.py
│     │     │  │  ├─ trio.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ anyio.cpython-311.pyc
│     │     │  │     ├─ auto.cpython-311.pyc
│     │     │  │     ├─ base.cpython-311.pyc
│     │     │  │     ├─ mock.cpython-311.pyc
│     │     │  │     ├─ sync.cpython-311.pyc
│     │     │  │     ├─ trio.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _exceptions.py
│     │     │  ├─ _models.py
│     │     │  ├─ _ssl.py
│     │     │  ├─ _sync
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ connection_pool.py
│     │     │  │  ├─ http11.py
│     │     │  │  ├─ http2.py
│     │     │  │  ├─ http_proxy.py
│     │     │  │  ├─ interfaces.py
│     │     │  │  ├─ socks_proxy.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-311.pyc
│     │     │  │     ├─ connection_pool.cpython-311.pyc
│     │     │  │     ├─ http11.cpython-311.pyc
│     │     │  │     ├─ http2.cpython-311.pyc
│     │     │  │     ├─ http_proxy.cpython-311.pyc
│     │     │  │     ├─ interfaces.cpython-311.pyc
│     │     │  │     ├─ socks_proxy.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _synchronization.py
│     │     │  ├─ _trace.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ _api.cpython-311.pyc
│     │     │     ├─ _exceptions.cpython-311.pyc
│     │     │     ├─ _models.cpython-311.pyc
│     │     │     ├─ _ssl.cpython-311.pyc
│     │     │     ├─ _synchronization.cpython-311.pyc
│     │     │     ├─ _trace.cpython-311.pyc
│     │     │     ├─ _utils.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ httpcore-1.0.9.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.md
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ httpx
│     │     │  ├─ py.typed
│     │     │  ├─ _api.py
│     │     │  ├─ _auth.py
│     │     │  ├─ _client.py
│     │     │  ├─ _config.py
│     │     │  ├─ _content.py
│     │     │  ├─ _decoders.py
│     │     │  ├─ _exceptions.py
│     │     │  ├─ _main.py
│     │     │  ├─ _models.py
│     │     │  ├─ _multipart.py
│     │     │  ├─ _status_codes.py
│     │     │  ├─ _transports
│     │     │  │  ├─ asgi.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ default.py
│     │     │  │  ├─ mock.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asgi.cpython-311.pyc
│     │     │  │     ├─ base.cpython-311.pyc
│     │     │  │     ├─ default.cpython-311.pyc
│     │     │  │     ├─ mock.cpython-311.pyc
│     │     │  │     ├─ wsgi.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _types.py
│     │     │  ├─ _urlparse.py
│     │     │  ├─ _urls.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __pycache__
│     │     │  │  ├─ _api.cpython-311.pyc
│     │     │  │  ├─ _auth.cpython-311.pyc
│     │     │  │  ├─ _client.cpython-311.pyc
│     │     │  │  ├─ _config.cpython-311.pyc
│     │     │  │  ├─ _content.cpython-311.pyc
│     │     │  │  ├─ _decoders.cpython-311.pyc
│     │     │  │  ├─ _exceptions.cpython-311.pyc
│     │     │  │  ├─ _main.cpython-311.pyc
│     │     │  │  ├─ _models.cpython-311.pyc
│     │     │  │  ├─ _multipart.cpython-311.pyc
│     │     │  │  ├─ _status_codes.cpython-311.pyc
│     │     │  │  ├─ _types.cpython-311.pyc
│     │     │  │  ├─ _urlparse.cpython-311.pyc
│     │     │  │  ├─ _urls.cpython-311.pyc
│     │     │  │  ├─ _utils.cpython-311.pyc
│     │     │  │  ├─ __init__.cpython-311.pyc
│     │     │  │  └─ __version__.cpython-311.pyc
│     │     │  └─ __version__.py
│     │     ├─ httpx-0.28.1.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.md
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ idna
│     │     │  ├─ codec.py
│     │     │  ├─ compat.py
│     │     │  ├─ core.py
│     │     │  ├─ idnadata.py
│     │     │  ├─ intranges.py
│     │     │  ├─ package_data.py
│     │     │  ├─ py.typed
│     │     │  ├─ uts46data.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ codec.cpython-311.pyc
│     │     │     ├─ compat.cpython-311.pyc
│     │     │     ├─ core.cpython-311.pyc
│     │     │     ├─ idnadata.cpython-311.pyc
│     │     │     ├─ intranges.cpython-311.pyc
│     │     │     ├─ package_data.cpython-311.pyc
│     │     │     ├─ uts46data.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ idna-3.11.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.md
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ jiter
│     │     │  ├─ jiter.cp311-win_amd64.pyd
│     │     │  ├─ py.typed
│     │     │  ├─ __init__.py
│     │     │  ├─ __init__.pyi
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ jiter-0.14.0.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ sboms
│     │     │  │  └─ jiter-python.cyclonedx.json
│     │     │  └─ WHEEL
│     │     ├─ openai
│     │     │  ├─ auth
│     │     │  │  ├─ _workload.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _workload.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ cli
│     │     │  │  ├─ _api
│     │     │  │  │  ├─ audio.py
│     │     │  │  │  ├─ chat
│     │     │  │  │  │  ├─ completions.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ completions.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ completions.py
│     │     │  │  │  ├─ files.py
│     │     │  │  │  ├─ fine_tuning
│     │     │  │  │  │  ├─ jobs.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ jobs.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ image.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ _main.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ audio.cpython-311.pyc
│     │     │  │  │     ├─ completions.cpython-311.pyc
│     │     │  │  │     ├─ files.cpython-311.pyc
│     │     │  │  │     ├─ image.cpython-311.pyc
│     │     │  │  │     ├─ models.cpython-311.pyc
│     │     │  │  │     ├─ _main.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ _cli.py
│     │     │  │  ├─ _errors.py
│     │     │  │  ├─ _models.py
│     │     │  │  ├─ _progress.py
│     │     │  │  ├─ _tools
│     │     │  │  │  ├─ fine_tunes.py
│     │     │  │  │  ├─ migrate.py
│     │     │  │  │  ├─ _main.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ fine_tunes.cpython-311.pyc
│     │     │  │  │     ├─ migrate.cpython-311.pyc
│     │     │  │  │     ├─ _main.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _cli.cpython-311.pyc
│     │     │  │     ├─ _errors.cpython-311.pyc
│     │     │  │     ├─ _models.cpython-311.pyc
│     │     │  │     ├─ _progress.cpython-311.pyc
│     │     │  │     ├─ _utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ helpers
│     │     │  │  ├─ local_audio_player.py
│     │     │  │  ├─ microphone.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ local_audio_player.cpython-311.pyc
│     │     │  │     ├─ microphone.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ lib
│     │     │  │  ├─ .keep
│     │     │  │  ├─ azure.py
│     │     │  │  ├─ streaming
│     │     │  │  │  ├─ chat
│     │     │  │  │  │  ├─ _completions.py
│     │     │  │  │  │  ├─ _events.py
│     │     │  │  │  │  ├─ _types.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _completions.cpython-311.pyc
│     │     │  │  │  │     ├─ _events.cpython-311.pyc
│     │     │  │  │  │     ├─ _types.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ responses
│     │     │  │  │  │  ├─ _events.py
│     │     │  │  │  │  ├─ _responses.py
│     │     │  │  │  │  ├─ _types.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _events.cpython-311.pyc
│     │     │  │  │  │     ├─ _responses.cpython-311.pyc
│     │     │  │  │  │     ├─ _types.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ _assistants.py
│     │     │  │  │  ├─ _deltas.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _assistants.cpython-311.pyc
│     │     │  │  │     ├─ _deltas.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ _old_api.py
│     │     │  │  ├─ _parsing
│     │     │  │  │  ├─ _completions.py
│     │     │  │  │  ├─ _responses.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _completions.cpython-311.pyc
│     │     │  │  │     ├─ _responses.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ _pydantic.py
│     │     │  │  ├─ _realtime.py
│     │     │  │  ├─ _tools.py
│     │     │  │  ├─ _validators.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ azure.cpython-311.pyc
│     │     │  │     ├─ _old_api.cpython-311.pyc
│     │     │  │     ├─ _pydantic.cpython-311.pyc
│     │     │  │     ├─ _realtime.cpython-311.pyc
│     │     │  │     ├─ _tools.cpython-311.pyc
│     │     │  │     ├─ _validators.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ pagination.py
│     │     │  ├─ py.typed
│     │     │  ├─ resources
│     │     │  │  ├─ audio
│     │     │  │  │  ├─ audio.py
│     │     │  │  │  ├─ speech.py
│     │     │  │  │  ├─ transcriptions.py
│     │     │  │  │  ├─ translations.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ audio.cpython-311.pyc
│     │     │  │  │     ├─ speech.cpython-311.pyc
│     │     │  │  │     ├─ transcriptions.cpython-311.pyc
│     │     │  │  │     ├─ translations.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ batches.py
│     │     │  │  ├─ beta
│     │     │  │  │  ├─ assistants.py
│     │     │  │  │  ├─ beta.py
│     │     │  │  │  ├─ chatkit
│     │     │  │  │  │  ├─ chatkit.py
│     │     │  │  │  │  ├─ sessions.py
│     │     │  │  │  │  ├─ threads.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ chatkit.cpython-311.pyc
│     │     │  │  │  │     ├─ sessions.cpython-311.pyc
│     │     │  │  │  │     ├─ threads.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ realtime
│     │     │  │  │  │  ├─ realtime.py
│     │     │  │  │  │  ├─ sessions.py
│     │     │  │  │  │  ├─ transcription_sessions.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ realtime.cpython-311.pyc
│     │     │  │  │  │     ├─ sessions.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_sessions.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ threads
│     │     │  │  │  │  ├─ messages.py
│     │     │  │  │  │  ├─ runs
│     │     │  │  │  │  │  ├─ runs.py
│     │     │  │  │  │  │  ├─ steps.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ runs.cpython-311.pyc
│     │     │  │  │  │  │     ├─ steps.cpython-311.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  │  ├─ threads.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ messages.cpython-311.pyc
│     │     │  │  │  │     ├─ threads.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ assistants.cpython-311.pyc
│     │     │  │  │     ├─ beta.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ chat
│     │     │  │  │  ├─ chat.py
│     │     │  │  │  ├─ completions
│     │     │  │  │  │  ├─ completions.py
│     │     │  │  │  │  ├─ messages.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ completions.cpython-311.pyc
│     │     │  │  │  │     ├─ messages.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ chat.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ completions.py
│     │     │  │  ├─ containers
│     │     │  │  │  ├─ containers.py
│     │     │  │  │  ├─ files
│     │     │  │  │  │  ├─ content.py
│     │     │  │  │  │  ├─ files.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ content.cpython-311.pyc
│     │     │  │  │  │     ├─ files.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ containers.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ conversations
│     │     │  │  │  ├─ api.md
│     │     │  │  │  ├─ conversations.py
│     │     │  │  │  ├─ items.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ conversations.cpython-311.pyc
│     │     │  │  │     ├─ items.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ embeddings.py
│     │     │  │  ├─ evals
│     │     │  │  │  ├─ evals.py
│     │     │  │  │  ├─ runs
│     │     │  │  │  │  ├─ output_items.py
│     │     │  │  │  │  ├─ runs.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ output_items.cpython-311.pyc
│     │     │  │  │  │     ├─ runs.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ evals.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ files.py
│     │     │  │  ├─ fine_tuning
│     │     │  │  │  ├─ alpha
│     │     │  │  │  │  ├─ alpha.py
│     │     │  │  │  │  ├─ graders.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ alpha.cpython-311.pyc
│     │     │  │  │  │     ├─ graders.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ checkpoints
│     │     │  │  │  │  ├─ checkpoints.py
│     │     │  │  │  │  ├─ permissions.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ checkpoints.cpython-311.pyc
│     │     │  │  │  │     ├─ permissions.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ fine_tuning.py
│     │     │  │  │  ├─ jobs
│     │     │  │  │  │  ├─ checkpoints.py
│     │     │  │  │  │  ├─ jobs.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ checkpoints.cpython-311.pyc
│     │     │  │  │  │     ├─ jobs.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ fine_tuning.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ images.py
│     │     │  │  ├─ models.py
│     │     │  │  ├─ moderations.py
│     │     │  │  ├─ realtime
│     │     │  │  │  ├─ api.md
│     │     │  │  │  ├─ calls.py
│     │     │  │  │  ├─ client_secrets.py
│     │     │  │  │  ├─ realtime.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ calls.cpython-311.pyc
│     │     │  │  │     ├─ client_secrets.cpython-311.pyc
│     │     │  │  │     ├─ realtime.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ responses
│     │     │  │  │  ├─ api.md
│     │     │  │  │  ├─ input_items.py
│     │     │  │  │  ├─ input_tokens.py
│     │     │  │  │  ├─ responses.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ input_items.cpython-311.pyc
│     │     │  │  │     ├─ input_tokens.cpython-311.pyc
│     │     │  │  │     ├─ responses.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ skills
│     │     │  │  │  ├─ content.py
│     │     │  │  │  ├─ skills.py
│     │     │  │  │  ├─ versions
│     │     │  │  │  │  ├─ content.py
│     │     │  │  │  │  ├─ versions.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ content.cpython-311.pyc
│     │     │  │  │  │     ├─ versions.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ content.cpython-311.pyc
│     │     │  │  │     ├─ skills.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ uploads
│     │     │  │  │  ├─ parts.py
│     │     │  │  │  ├─ uploads.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ parts.cpython-311.pyc
│     │     │  │  │     ├─ uploads.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ vector_stores
│     │     │  │  │  ├─ files.py
│     │     │  │  │  ├─ file_batches.py
│     │     │  │  │  ├─ vector_stores.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ files.cpython-311.pyc
│     │     │  │  │     ├─ file_batches.cpython-311.pyc
│     │     │  │  │     ├─ vector_stores.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ videos.py
│     │     │  │  ├─ webhooks
│     │     │  │  │  ├─ api.md
│     │     │  │  │  ├─ webhooks.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ webhooks.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ batches.cpython-311.pyc
│     │     │  │     ├─ completions.cpython-311.pyc
│     │     │  │     ├─ embeddings.cpython-311.pyc
│     │     │  │     ├─ files.cpython-311.pyc
│     │     │  │     ├─ images.cpython-311.pyc
│     │     │  │     ├─ models.cpython-311.pyc
│     │     │  │     ├─ moderations.cpython-311.pyc
│     │     │  │     ├─ videos.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ types
│     │     │  │  ├─ audio
│     │     │  │  │  ├─ speech_create_params.py
│     │     │  │  │  ├─ speech_model.py
│     │     │  │  │  ├─ transcription.py
│     │     │  │  │  ├─ transcription_create_params.py
│     │     │  │  │  ├─ transcription_create_response.py
│     │     │  │  │  ├─ transcription_diarized.py
│     │     │  │  │  ├─ transcription_diarized_segment.py
│     │     │  │  │  ├─ transcription_include.py
│     │     │  │  │  ├─ transcription_segment.py
│     │     │  │  │  ├─ transcription_stream_event.py
│     │     │  │  │  ├─ transcription_text_delta_event.py
│     │     │  │  │  ├─ transcription_text_done_event.py
│     │     │  │  │  ├─ transcription_text_segment_event.py
│     │     │  │  │  ├─ transcription_verbose.py
│     │     │  │  │  ├─ transcription_word.py
│     │     │  │  │  ├─ translation.py
│     │     │  │  │  ├─ translation_create_params.py
│     │     │  │  │  ├─ translation_create_response.py
│     │     │  │  │  ├─ translation_verbose.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ speech_create_params.cpython-311.pyc
│     │     │  │  │     ├─ speech_model.cpython-311.pyc
│     │     │  │  │     ├─ transcription.cpython-311.pyc
│     │     │  │  │     ├─ transcription_create_params.cpython-311.pyc
│     │     │  │  │     ├─ transcription_create_response.cpython-311.pyc
│     │     │  │  │     ├─ transcription_diarized.cpython-311.pyc
│     │     │  │  │     ├─ transcription_diarized_segment.cpython-311.pyc
│     │     │  │  │     ├─ transcription_include.cpython-311.pyc
│     │     │  │  │     ├─ transcription_segment.cpython-311.pyc
│     │     │  │  │     ├─ transcription_stream_event.cpython-311.pyc
│     │     │  │  │     ├─ transcription_text_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ transcription_text_done_event.cpython-311.pyc
│     │     │  │  │     ├─ transcription_text_segment_event.cpython-311.pyc
│     │     │  │  │     ├─ transcription_verbose.cpython-311.pyc
│     │     │  │  │     ├─ transcription_word.cpython-311.pyc
│     │     │  │  │     ├─ translation.cpython-311.pyc
│     │     │  │  │     ├─ translation_create_params.cpython-311.pyc
│     │     │  │  │     ├─ translation_create_response.cpython-311.pyc
│     │     │  │  │     ├─ translation_verbose.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ audio_model.py
│     │     │  │  ├─ audio_response_format.py
│     │     │  │  ├─ auto_file_chunking_strategy_param.py
│     │     │  │  ├─ batch.py
│     │     │  │  ├─ batch_create_params.py
│     │     │  │  ├─ batch_error.py
│     │     │  │  ├─ batch_list_params.py
│     │     │  │  ├─ batch_request_counts.py
│     │     │  │  ├─ batch_usage.py
│     │     │  │  ├─ beta
│     │     │  │  │  ├─ assistant.py
│     │     │  │  │  ├─ assistant_create_params.py
│     │     │  │  │  ├─ assistant_deleted.py
│     │     │  │  │  ├─ assistant_list_params.py
│     │     │  │  │  ├─ assistant_response_format_option.py
│     │     │  │  │  ├─ assistant_response_format_option_param.py
│     │     │  │  │  ├─ assistant_stream_event.py
│     │     │  │  │  ├─ assistant_tool.py
│     │     │  │  │  ├─ assistant_tool_choice.py
│     │     │  │  │  ├─ assistant_tool_choice_function.py
│     │     │  │  │  ├─ assistant_tool_choice_function_param.py
│     │     │  │  │  ├─ assistant_tool_choice_option.py
│     │     │  │  │  ├─ assistant_tool_choice_option_param.py
│     │     │  │  │  ├─ assistant_tool_choice_param.py
│     │     │  │  │  ├─ assistant_tool_param.py
│     │     │  │  │  ├─ assistant_update_params.py
│     │     │  │  │  ├─ chat
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ chatkit
│     │     │  │  │  │  ├─ chatkit_attachment.py
│     │     │  │  │  │  ├─ chatkit_response_output_text.py
│     │     │  │  │  │  ├─ chatkit_thread.py
│     │     │  │  │  │  ├─ chatkit_thread_assistant_message_item.py
│     │     │  │  │  │  ├─ chatkit_thread_item_list.py
│     │     │  │  │  │  ├─ chatkit_thread_user_message_item.py
│     │     │  │  │  │  ├─ chatkit_widget_item.py
│     │     │  │  │  │  ├─ chat_session.py
│     │     │  │  │  │  ├─ chat_session_automatic_thread_titling.py
│     │     │  │  │  │  ├─ chat_session_chatkit_configuration.py
│     │     │  │  │  │  ├─ chat_session_chatkit_configuration_param.py
│     │     │  │  │  │  ├─ chat_session_expires_after_param.py
│     │     │  │  │  │  ├─ chat_session_file_upload.py
│     │     │  │  │  │  ├─ chat_session_history.py
│     │     │  │  │  │  ├─ chat_session_rate_limits.py
│     │     │  │  │  │  ├─ chat_session_rate_limits_param.py
│     │     │  │  │  │  ├─ chat_session_status.py
│     │     │  │  │  │  ├─ chat_session_workflow_param.py
│     │     │  │  │  │  ├─ session_create_params.py
│     │     │  │  │  │  ├─ thread_delete_response.py
│     │     │  │  │  │  ├─ thread_list_items_params.py
│     │     │  │  │  │  ├─ thread_list_params.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ chatkit_attachment.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_response_output_text.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_thread.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_thread_assistant_message_item.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_thread_item_list.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_thread_user_message_item.cpython-311.pyc
│     │     │  │  │  │     ├─ chatkit_widget_item.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_automatic_thread_titling.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_chatkit_configuration.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_chatkit_configuration_param.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_expires_after_param.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_file_upload.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_history.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_rate_limits.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_rate_limits_param.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_status.cpython-311.pyc
│     │     │  │  │  │     ├─ chat_session_workflow_param.cpython-311.pyc
│     │     │  │  │  │     ├─ session_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ thread_delete_response.cpython-311.pyc
│     │     │  │  │  │     ├─ thread_list_items_params.cpython-311.pyc
│     │     │  │  │  │     ├─ thread_list_params.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ chatkit_workflow.py
│     │     │  │  │  ├─ code_interpreter_tool.py
│     │     │  │  │  ├─ code_interpreter_tool_param.py
│     │     │  │  │  ├─ file_search_tool.py
│     │     │  │  │  ├─ file_search_tool_param.py
│     │     │  │  │  ├─ function_tool.py
│     │     │  │  │  ├─ function_tool_param.py
│     │     │  │  │  ├─ realtime
│     │     │  │  │  │  ├─ conversation_created_event.py
│     │     │  │  │  │  ├─ conversation_item.py
│     │     │  │  │  │  ├─ conversation_item_content.py
│     │     │  │  │  │  ├─ conversation_item_content_param.py
│     │     │  │  │  │  ├─ conversation_item_created_event.py
│     │     │  │  │  │  ├─ conversation_item_create_event.py
│     │     │  │  │  │  ├─ conversation_item_create_event_param.py
│     │     │  │  │  │  ├─ conversation_item_deleted_event.py
│     │     │  │  │  │  ├─ conversation_item_delete_event.py
│     │     │  │  │  │  ├─ conversation_item_delete_event_param.py
│     │     │  │  │  │  ├─ conversation_item_input_audio_transcription_completed_event.py
│     │     │  │  │  │  ├─ conversation_item_input_audio_transcription_delta_event.py
│     │     │  │  │  │  ├─ conversation_item_input_audio_transcription_failed_event.py
│     │     │  │  │  │  ├─ conversation_item_param.py
│     │     │  │  │  │  ├─ conversation_item_retrieve_event.py
│     │     │  │  │  │  ├─ conversation_item_retrieve_event_param.py
│     │     │  │  │  │  ├─ conversation_item_truncated_event.py
│     │     │  │  │  │  ├─ conversation_item_truncate_event.py
│     │     │  │  │  │  ├─ conversation_item_truncate_event_param.py
│     │     │  │  │  │  ├─ conversation_item_with_reference.py
│     │     │  │  │  │  ├─ conversation_item_with_reference_param.py
│     │     │  │  │  │  ├─ error_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_append_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_append_event_param.py
│     │     │  │  │  │  ├─ input_audio_buffer_cleared_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_clear_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_clear_event_param.py
│     │     │  │  │  │  ├─ input_audio_buffer_committed_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_commit_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_commit_event_param.py
│     │     │  │  │  │  ├─ input_audio_buffer_speech_started_event.py
│     │     │  │  │  │  ├─ input_audio_buffer_speech_stopped_event.py
│     │     │  │  │  │  ├─ rate_limits_updated_event.py
│     │     │  │  │  │  ├─ realtime_client_event.py
│     │     │  │  │  │  ├─ realtime_client_event_param.py
│     │     │  │  │  │  ├─ realtime_connect_params.py
│     │     │  │  │  │  ├─ realtime_response.py
│     │     │  │  │  │  ├─ realtime_response_status.py
│     │     │  │  │  │  ├─ realtime_response_usage.py
│     │     │  │  │  │  ├─ realtime_server_event.py
│     │     │  │  │  │  ├─ response_audio_delta_event.py
│     │     │  │  │  │  ├─ response_audio_done_event.py
│     │     │  │  │  │  ├─ response_audio_transcript_delta_event.py
│     │     │  │  │  │  ├─ response_audio_transcript_done_event.py
│     │     │  │  │  │  ├─ response_cancel_event.py
│     │     │  │  │  │  ├─ response_cancel_event_param.py
│     │     │  │  │  │  ├─ response_content_part_added_event.py
│     │     │  │  │  │  ├─ response_content_part_done_event.py
│     │     │  │  │  │  ├─ response_created_event.py
│     │     │  │  │  │  ├─ response_create_event.py
│     │     │  │  │  │  ├─ response_create_event_param.py
│     │     │  │  │  │  ├─ response_done_event.py
│     │     │  │  │  │  ├─ response_function_call_arguments_delta_event.py
│     │     │  │  │  │  ├─ response_function_call_arguments_done_event.py
│     │     │  │  │  │  ├─ response_output_item_added_event.py
│     │     │  │  │  │  ├─ response_output_item_done_event.py
│     │     │  │  │  │  ├─ response_text_delta_event.py
│     │     │  │  │  │  ├─ response_text_done_event.py
│     │     │  │  │  │  ├─ session.py
│     │     │  │  │  │  ├─ session_created_event.py
│     │     │  │  │  │  ├─ session_create_params.py
│     │     │  │  │  │  ├─ session_create_response.py
│     │     │  │  │  │  ├─ session_updated_event.py
│     │     │  │  │  │  ├─ session_update_event.py
│     │     │  │  │  │  ├─ session_update_event_param.py
│     │     │  │  │  │  ├─ transcription_session.py
│     │     │  │  │  │  ├─ transcription_session_create_params.py
│     │     │  │  │  │  ├─ transcription_session_update.py
│     │     │  │  │  │  ├─ transcription_session_updated_event.py
│     │     │  │  │  │  ├─ transcription_session_update_param.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ conversation_created_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_content.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_content_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_created_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_create_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_create_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_deleted_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_delete_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_delete_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_input_audio_transcription_completed_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_input_audio_transcription_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_input_audio_transcription_failed_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_retrieve_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_retrieve_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_truncated_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_truncate_event.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_truncate_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_with_reference.cpython-311.pyc
│     │     │  │  │  │     ├─ conversation_item_with_reference_param.cpython-311.pyc
│     │     │  │  │  │     ├─ error_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_append_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_append_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_cleared_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_clear_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_clear_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_committed_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_commit_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_commit_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_speech_started_event.cpython-311.pyc
│     │     │  │  │  │     ├─ input_audio_buffer_speech_stopped_event.cpython-311.pyc
│     │     │  │  │  │     ├─ rate_limits_updated_event.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_client_event.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_client_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_connect_params.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_response.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_response_status.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_response_usage.cpython-311.pyc
│     │     │  │  │  │     ├─ realtime_server_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_audio_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_audio_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_audio_transcript_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_audio_transcript_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_cancel_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_cancel_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ response_content_part_added_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_content_part_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_created_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_create_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_create_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ response_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_function_call_arguments_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_function_call_arguments_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_output_item_added_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_output_item_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_text_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ response_text_done_event.cpython-311.pyc
│     │     │  │  │  │     ├─ session.cpython-311.pyc
│     │     │  │  │  │     ├─ session_created_event.cpython-311.pyc
│     │     │  │  │  │     ├─ session_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ session_create_response.cpython-311.pyc
│     │     │  │  │  │     ├─ session_updated_event.cpython-311.pyc
│     │     │  │  │  │     ├─ session_update_event.cpython-311.pyc
│     │     │  │  │  │     ├─ session_update_event_param.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_session.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_session_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_session_update.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_session_updated_event.cpython-311.pyc
│     │     │  │  │  │     ├─ transcription_session_update_param.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ thread.py
│     │     │  │  │  ├─ threads
│     │     │  │  │  │  ├─ annotation.py
│     │     │  │  │  │  ├─ annotation_delta.py
│     │     │  │  │  │  ├─ file_citation_annotation.py
│     │     │  │  │  │  ├─ file_citation_delta_annotation.py
│     │     │  │  │  │  ├─ file_path_annotation.py
│     │     │  │  │  │  ├─ file_path_delta_annotation.py
│     │     │  │  │  │  ├─ image_file.py
│     │     │  │  │  │  ├─ image_file_content_block.py
│     │     │  │  │  │  ├─ image_file_content_block_param.py
│     │     │  │  │  │  ├─ image_file_delta.py
│     │     │  │  │  │  ├─ image_file_delta_block.py
│     │     │  │  │  │  ├─ image_file_param.py
│     │     │  │  │  │  ├─ image_url.py
│     │     │  │  │  │  ├─ image_url_content_block.py
│     │     │  │  │  │  ├─ image_url_content_block_param.py
│     │     │  │  │  │  ├─ image_url_delta.py
│     │     │  │  │  │  ├─ image_url_delta_block.py
│     │     │  │  │  │  ├─ image_url_param.py
│     │     │  │  │  │  ├─ message.py
│     │     │  │  │  │  ├─ message_content.py
│     │     │  │  │  │  ├─ message_content_delta.py
│     │     │  │  │  │  ├─ message_content_part_param.py
│     │     │  │  │  │  ├─ message_create_params.py
│     │     │  │  │  │  ├─ message_deleted.py
│     │     │  │  │  │  ├─ message_delta.py
│     │     │  │  │  │  ├─ message_delta_event.py
│     │     │  │  │  │  ├─ message_list_params.py
│     │     │  │  │  │  ├─ message_update_params.py
│     │     │  │  │  │  ├─ refusal_content_block.py
│     │     │  │  │  │  ├─ refusal_delta_block.py
│     │     │  │  │  │  ├─ required_action_function_tool_call.py
│     │     │  │  │  │  ├─ run.py
│     │     │  │  │  │  ├─ runs
│     │     │  │  │  │  │  ├─ code_interpreter_logs.py
│     │     │  │  │  │  │  ├─ code_interpreter_output_image.py
│     │     │  │  │  │  │  ├─ code_interpreter_tool_call.py
│     │     │  │  │  │  │  ├─ code_interpreter_tool_call_delta.py
│     │     │  │  │  │  │  ├─ file_search_tool_call.py
│     │     │  │  │  │  │  ├─ file_search_tool_call_delta.py
│     │     │  │  │  │  │  ├─ function_tool_call.py
│     │     │  │  │  │  │  ├─ function_tool_call_delta.py
│     │     │  │  │  │  │  ├─ message_creation_step_details.py
│     │     │  │  │  │  │  ├─ run_step.py
│     │     │  │  │  │  │  ├─ run_step_delta.py
│     │     │  │  │  │  │  ├─ run_step_delta_event.py
│     │     │  │  │  │  │  ├─ run_step_delta_message_delta.py
│     │     │  │  │  │  │  ├─ run_step_include.py
│     │     │  │  │  │  │  ├─ step_list_params.py
│     │     │  │  │  │  │  ├─ step_retrieve_params.py
│     │     │  │  │  │  │  ├─ tool_call.py
│     │     │  │  │  │  │  ├─ tool_calls_step_details.py
│     │     │  │  │  │  │  ├─ tool_call_delta.py
│     │     │  │  │  │  │  ├─ tool_call_delta_object.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ code_interpreter_logs.cpython-311.pyc
│     │     │  │  │  │  │     ├─ code_interpreter_output_image.cpython-311.pyc
│     │     │  │  │  │  │     ├─ code_interpreter_tool_call.cpython-311.pyc
│     │     │  │  │  │  │     ├─ code_interpreter_tool_call_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ file_search_tool_call.cpython-311.pyc
│     │     │  │  │  │  │     ├─ file_search_tool_call_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ function_tool_call.cpython-311.pyc
│     │     │  │  │  │  │     ├─ function_tool_call_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ message_creation_step_details.cpython-311.pyc
│     │     │  │  │  │  │     ├─ run_step.cpython-311.pyc
│     │     │  │  │  │  │     ├─ run_step_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ run_step_delta_event.cpython-311.pyc
│     │     │  │  │  │  │     ├─ run_step_delta_message_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ run_step_include.cpython-311.pyc
│     │     │  │  │  │  │     ├─ step_list_params.cpython-311.pyc
│     │     │  │  │  │  │     ├─ step_retrieve_params.cpython-311.pyc
│     │     │  │  │  │  │     ├─ tool_call.cpython-311.pyc
│     │     │  │  │  │  │     ├─ tool_calls_step_details.cpython-311.pyc
│     │     │  │  │  │  │     ├─ tool_call_delta.cpython-311.pyc
│     │     │  │  │  │  │     ├─ tool_call_delta_object.cpython-311.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  │  ├─ run_create_params.py
│     │     │  │  │  │  ├─ run_list_params.py
│     │     │  │  │  │  ├─ run_status.py
│     │     │  │  │  │  ├─ run_submit_tool_outputs_params.py
│     │     │  │  │  │  ├─ run_update_params.py
│     │     │  │  │  │  ├─ text.py
│     │     │  │  │  │  ├─ text_content_block.py
│     │     │  │  │  │  ├─ text_content_block_param.py
│     │     │  │  │  │  ├─ text_delta.py
│     │     │  │  │  │  ├─ text_delta_block.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ annotation.cpython-311.pyc
│     │     │  │  │  │     ├─ annotation_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ file_citation_annotation.cpython-311.pyc
│     │     │  │  │  │     ├─ file_citation_delta_annotation.cpython-311.pyc
│     │     │  │  │  │     ├─ file_path_annotation.cpython-311.pyc
│     │     │  │  │  │     ├─ file_path_delta_annotation.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file_content_block.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file_content_block_param.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file_delta_block.cpython-311.pyc
│     │     │  │  │  │     ├─ image_file_param.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url_content_block.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url_content_block_param.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url_delta_block.cpython-311.pyc
│     │     │  │  │  │     ├─ image_url_param.cpython-311.pyc
│     │     │  │  │  │     ├─ message.cpython-311.pyc
│     │     │  │  │  │     ├─ message_content.cpython-311.pyc
│     │     │  │  │  │     ├─ message_content_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ message_content_part_param.cpython-311.pyc
│     │     │  │  │  │     ├─ message_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ message_deleted.cpython-311.pyc
│     │     │  │  │  │     ├─ message_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ message_delta_event.cpython-311.pyc
│     │     │  │  │  │     ├─ message_list_params.cpython-311.pyc
│     │     │  │  │  │     ├─ message_update_params.cpython-311.pyc
│     │     │  │  │  │     ├─ refusal_content_block.cpython-311.pyc
│     │     │  │  │  │     ├─ refusal_delta_block.cpython-311.pyc
│     │     │  │  │  │     ├─ required_action_function_tool_call.cpython-311.pyc
│     │     │  │  │  │     ├─ run.cpython-311.pyc
│     │     │  │  │  │     ├─ run_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ run_list_params.cpython-311.pyc
│     │     │  │  │  │     ├─ run_status.cpython-311.pyc
│     │     │  │  │  │     ├─ run_submit_tool_outputs_params.cpython-311.pyc
│     │     │  │  │  │     ├─ run_update_params.cpython-311.pyc
│     │     │  │  │  │     ├─ text.cpython-311.pyc
│     │     │  │  │  │     ├─ text_content_block.cpython-311.pyc
│     │     │  │  │  │     ├─ text_content_block_param.cpython-311.pyc
│     │     │  │  │  │     ├─ text_delta.cpython-311.pyc
│     │     │  │  │  │     ├─ text_delta_block.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ thread_create_and_run_params.py
│     │     │  │  │  ├─ thread_create_params.py
│     │     │  │  │  ├─ thread_deleted.py
│     │     │  │  │  ├─ thread_update_params.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ assistant.cpython-311.pyc
│     │     │  │  │     ├─ assistant_create_params.cpython-311.pyc
│     │     │  │  │     ├─ assistant_deleted.cpython-311.pyc
│     │     │  │  │     ├─ assistant_list_params.cpython-311.pyc
│     │     │  │  │     ├─ assistant_response_format_option.cpython-311.pyc
│     │     │  │  │     ├─ assistant_response_format_option_param.cpython-311.pyc
│     │     │  │  │     ├─ assistant_stream_event.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice_function.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice_function_param.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice_option.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice_option_param.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_choice_param.cpython-311.pyc
│     │     │  │  │     ├─ assistant_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ assistant_update_params.cpython-311.pyc
│     │     │  │  │     ├─ chatkit_workflow.cpython-311.pyc
│     │     │  │  │     ├─ code_interpreter_tool.cpython-311.pyc
│     │     │  │  │     ├─ code_interpreter_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ file_search_tool.cpython-311.pyc
│     │     │  │  │     ├─ file_search_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ function_tool.cpython-311.pyc
│     │     │  │  │     ├─ function_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ thread.cpython-311.pyc
│     │     │  │  │     ├─ thread_create_and_run_params.cpython-311.pyc
│     │     │  │  │     ├─ thread_create_params.cpython-311.pyc
│     │     │  │  │     ├─ thread_deleted.cpython-311.pyc
│     │     │  │  │     ├─ thread_update_params.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ chat
│     │     │  │  │  ├─ chat_completion.py
│     │     │  │  │  ├─ chat_completion_allowed_tools_param.py
│     │     │  │  │  ├─ chat_completion_allowed_tool_choice_param.py
│     │     │  │  │  ├─ chat_completion_assistant_message_param.py
│     │     │  │  │  ├─ chat_completion_audio.py
│     │     │  │  │  ├─ chat_completion_audio_param.py
│     │     │  │  │  ├─ chat_completion_chunk.py
│     │     │  │  │  ├─ chat_completion_content_part_image.py
│     │     │  │  │  ├─ chat_completion_content_part_image_param.py
│     │     │  │  │  ├─ chat_completion_content_part_input_audio_param.py
│     │     │  │  │  ├─ chat_completion_content_part_param.py
│     │     │  │  │  ├─ chat_completion_content_part_refusal_param.py
│     │     │  │  │  ├─ chat_completion_content_part_text.py
│     │     │  │  │  ├─ chat_completion_content_part_text_param.py
│     │     │  │  │  ├─ chat_completion_custom_tool_param.py
│     │     │  │  │  ├─ chat_completion_deleted.py
│     │     │  │  │  ├─ chat_completion_developer_message_param.py
│     │     │  │  │  ├─ chat_completion_function_call_option_param.py
│     │     │  │  │  ├─ chat_completion_function_message_param.py
│     │     │  │  │  ├─ chat_completion_function_tool.py
│     │     │  │  │  ├─ chat_completion_function_tool_param.py
│     │     │  │  │  ├─ chat_completion_message.py
│     │     │  │  │  ├─ chat_completion_message_custom_tool_call.py
│     │     │  │  │  ├─ chat_completion_message_custom_tool_call_param.py
│     │     │  │  │  ├─ chat_completion_message_function_tool_call.py
│     │     │  │  │  ├─ chat_completion_message_function_tool_call_param.py
│     │     │  │  │  ├─ chat_completion_message_param.py
│     │     │  │  │  ├─ chat_completion_message_tool_call.py
│     │     │  │  │  ├─ chat_completion_message_tool_call_param.py
│     │     │  │  │  ├─ chat_completion_message_tool_call_union_param.py
│     │     │  │  │  ├─ chat_completion_modality.py
│     │     │  │  │  ├─ chat_completion_named_tool_choice_custom_param.py
│     │     │  │  │  ├─ chat_completion_named_tool_choice_param.py
│     │     │  │  │  ├─ chat_completion_prediction_content_param.py
│     │     │  │  │  ├─ chat_completion_reasoning_effort.py
│     │     │  │  │  ├─ chat_completion_role.py
│     │     │  │  │  ├─ chat_completion_store_message.py
│     │     │  │  │  ├─ chat_completion_stream_options_param.py
│     │     │  │  │  ├─ chat_completion_system_message_param.py
│     │     │  │  │  ├─ chat_completion_token_logprob.py
│     │     │  │  │  ├─ chat_completion_tool_choice_option_param.py
│     │     │  │  │  ├─ chat_completion_tool_message_param.py
│     │     │  │  │  ├─ chat_completion_tool_param.py
│     │     │  │  │  ├─ chat_completion_tool_union_param.py
│     │     │  │  │  ├─ chat_completion_user_message_param.py
│     │     │  │  │  ├─ completions
│     │     │  │  │  │  ├─ message_list_params.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ message_list_params.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ completion_create_params.py
│     │     │  │  │  ├─ completion_list_params.py
│     │     │  │  │  ├─ completion_update_params.py
│     │     │  │  │  ├─ parsed_chat_completion.py
│     │     │  │  │  ├─ parsed_function_tool_call.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ chat_completion.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_allowed_tools_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_allowed_tool_choice_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_assistant_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_audio.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_audio_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_chunk.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_image.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_image_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_input_audio_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_refusal_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_text.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_content_part_text_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_custom_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_deleted.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_developer_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_function_call_option_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_function_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_function_tool.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_function_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_custom_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_custom_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_function_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_function_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_message_tool_call_union_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_modality.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_named_tool_choice_custom_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_named_tool_choice_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_prediction_content_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_reasoning_effort.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_role.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_store_message.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_stream_options_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_system_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_token_logprob.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_tool_choice_option_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_tool_message_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_tool_union_param.cpython-311.pyc
│     │     │  │  │     ├─ chat_completion_user_message_param.cpython-311.pyc
│     │     │  │  │     ├─ completion_create_params.cpython-311.pyc
│     │     │  │  │     ├─ completion_list_params.cpython-311.pyc
│     │     │  │  │     ├─ completion_update_params.cpython-311.pyc
│     │     │  │  │     ├─ parsed_chat_completion.cpython-311.pyc
│     │     │  │  │     ├─ parsed_function_tool_call.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ chat_model.py
│     │     │  │  ├─ completion.py
│     │     │  │  ├─ completion_choice.py
│     │     │  │  ├─ completion_create_params.py
│     │     │  │  ├─ completion_usage.py
│     │     │  │  ├─ containers
│     │     │  │  │  ├─ files
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ file_create_params.py
│     │     │  │  │  ├─ file_create_response.py
│     │     │  │  │  ├─ file_list_params.py
│     │     │  │  │  ├─ file_list_response.py
│     │     │  │  │  ├─ file_retrieve_response.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ file_create_params.cpython-311.pyc
│     │     │  │  │     ├─ file_create_response.cpython-311.pyc
│     │     │  │  │     ├─ file_list_params.cpython-311.pyc
│     │     │  │  │     ├─ file_list_response.cpython-311.pyc
│     │     │  │  │     ├─ file_retrieve_response.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ container_create_params.py
│     │     │  │  ├─ container_create_response.py
│     │     │  │  ├─ container_list_params.py
│     │     │  │  ├─ container_list_response.py
│     │     │  │  ├─ container_retrieve_response.py
│     │     │  │  ├─ conversations
│     │     │  │  │  ├─ computer_screenshot_content.py
│     │     │  │  │  ├─ conversation.py
│     │     │  │  │  ├─ conversation_create_params.py
│     │     │  │  │  ├─ conversation_deleted_resource.py
│     │     │  │  │  ├─ conversation_item.py
│     │     │  │  │  ├─ conversation_item_list.py
│     │     │  │  │  ├─ conversation_update_params.py
│     │     │  │  │  ├─ input_file_content.py
│     │     │  │  │  ├─ input_file_content_param.py
│     │     │  │  │  ├─ input_image_content.py
│     │     │  │  │  ├─ input_image_content_param.py
│     │     │  │  │  ├─ input_text_content.py
│     │     │  │  │  ├─ input_text_content_param.py
│     │     │  │  │  ├─ item_create_params.py
│     │     │  │  │  ├─ item_list_params.py
│     │     │  │  │  ├─ item_retrieve_params.py
│     │     │  │  │  ├─ message.py
│     │     │  │  │  ├─ output_text_content.py
│     │     │  │  │  ├─ output_text_content_param.py
│     │     │  │  │  ├─ refusal_content.py
│     │     │  │  │  ├─ refusal_content_param.py
│     │     │  │  │  ├─ summary_text_content.py
│     │     │  │  │  ├─ text_content.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ computer_screenshot_content.cpython-311.pyc
│     │     │  │  │     ├─ conversation.cpython-311.pyc
│     │     │  │  │     ├─ conversation_create_params.cpython-311.pyc
│     │     │  │  │     ├─ conversation_deleted_resource.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_list.cpython-311.pyc
│     │     │  │  │     ├─ conversation_update_params.cpython-311.pyc
│     │     │  │  │     ├─ input_file_content.cpython-311.pyc
│     │     │  │  │     ├─ input_file_content_param.cpython-311.pyc
│     │     │  │  │     ├─ input_image_content.cpython-311.pyc
│     │     │  │  │     ├─ input_image_content_param.cpython-311.pyc
│     │     │  │  │     ├─ input_text_content.cpython-311.pyc
│     │     │  │  │     ├─ input_text_content_param.cpython-311.pyc
│     │     │  │  │     ├─ item_create_params.cpython-311.pyc
│     │     │  │  │     ├─ item_list_params.cpython-311.pyc
│     │     │  │  │     ├─ item_retrieve_params.cpython-311.pyc
│     │     │  │  │     ├─ message.cpython-311.pyc
│     │     │  │  │     ├─ output_text_content.cpython-311.pyc
│     │     │  │  │     ├─ output_text_content_param.cpython-311.pyc
│     │     │  │  │     ├─ refusal_content.cpython-311.pyc
│     │     │  │  │     ├─ refusal_content_param.cpython-311.pyc
│     │     │  │  │     ├─ summary_text_content.cpython-311.pyc
│     │     │  │  │     ├─ text_content.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ create_embedding_response.py
│     │     │  │  ├─ deleted_skill.py
│     │     │  │  ├─ embedding.py
│     │     │  │  ├─ embedding_create_params.py
│     │     │  │  ├─ embedding_model.py
│     │     │  │  ├─ evals
│     │     │  │  │  ├─ create_eval_completions_run_data_source.py
│     │     │  │  │  ├─ create_eval_completions_run_data_source_param.py
│     │     │  │  │  ├─ create_eval_jsonl_run_data_source.py
│     │     │  │  │  ├─ create_eval_jsonl_run_data_source_param.py
│     │     │  │  │  ├─ eval_api_error.py
│     │     │  │  │  ├─ runs
│     │     │  │  │  │  ├─ output_item_list_params.py
│     │     │  │  │  │  ├─ output_item_list_response.py
│     │     │  │  │  │  ├─ output_item_retrieve_response.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ output_item_list_params.cpython-311.pyc
│     │     │  │  │  │     ├─ output_item_list_response.cpython-311.pyc
│     │     │  │  │  │     ├─ output_item_retrieve_response.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ run_cancel_response.py
│     │     │  │  │  ├─ run_create_params.py
│     │     │  │  │  ├─ run_create_response.py
│     │     │  │  │  ├─ run_delete_response.py
│     │     │  │  │  ├─ run_list_params.py
│     │     │  │  │  ├─ run_list_response.py
│     │     │  │  │  ├─ run_retrieve_response.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ create_eval_completions_run_data_source.cpython-311.pyc
│     │     │  │  │     ├─ create_eval_completions_run_data_source_param.cpython-311.pyc
│     │     │  │  │     ├─ create_eval_jsonl_run_data_source.cpython-311.pyc
│     │     │  │  │     ├─ create_eval_jsonl_run_data_source_param.cpython-311.pyc
│     │     │  │  │     ├─ eval_api_error.cpython-311.pyc
│     │     │  │  │     ├─ run_cancel_response.cpython-311.pyc
│     │     │  │  │     ├─ run_create_params.cpython-311.pyc
│     │     │  │  │     ├─ run_create_response.cpython-311.pyc
│     │     │  │  │     ├─ run_delete_response.cpython-311.pyc
│     │     │  │  │     ├─ run_list_params.cpython-311.pyc
│     │     │  │  │     ├─ run_list_response.cpython-311.pyc
│     │     │  │  │     ├─ run_retrieve_response.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ eval_create_params.py
│     │     │  │  ├─ eval_create_response.py
│     │     │  │  ├─ eval_custom_data_source_config.py
│     │     │  │  ├─ eval_delete_response.py
│     │     │  │  ├─ eval_list_params.py
│     │     │  │  ├─ eval_list_response.py
│     │     │  │  ├─ eval_retrieve_response.py
│     │     │  │  ├─ eval_stored_completions_data_source_config.py
│     │     │  │  ├─ eval_update_params.py
│     │     │  │  ├─ eval_update_response.py
│     │     │  │  ├─ file_chunking_strategy.py
│     │     │  │  ├─ file_chunking_strategy_param.py
│     │     │  │  ├─ file_content.py
│     │     │  │  ├─ file_create_params.py
│     │     │  │  ├─ file_deleted.py
│     │     │  │  ├─ file_list_params.py
│     │     │  │  ├─ file_object.py
│     │     │  │  ├─ file_purpose.py
│     │     │  │  ├─ fine_tuning
│     │     │  │  │  ├─ alpha
│     │     │  │  │  │  ├─ grader_run_params.py
│     │     │  │  │  │  ├─ grader_run_response.py
│     │     │  │  │  │  ├─ grader_validate_params.py
│     │     │  │  │  │  ├─ grader_validate_response.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ grader_run_params.cpython-311.pyc
│     │     │  │  │  │     ├─ grader_run_response.cpython-311.pyc
│     │     │  │  │  │     ├─ grader_validate_params.cpython-311.pyc
│     │     │  │  │  │     ├─ grader_validate_response.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ checkpoints
│     │     │  │  │  │  ├─ permission_create_params.py
│     │     │  │  │  │  ├─ permission_create_response.py
│     │     │  │  │  │  ├─ permission_delete_response.py
│     │     │  │  │  │  ├─ permission_list_params.py
│     │     │  │  │  │  ├─ permission_list_response.py
│     │     │  │  │  │  ├─ permission_retrieve_params.py
│     │     │  │  │  │  ├─ permission_retrieve_response.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ permission_create_params.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_create_response.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_delete_response.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_list_params.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_list_response.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_retrieve_params.cpython-311.pyc
│     │     │  │  │  │     ├─ permission_retrieve_response.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ dpo_hyperparameters.py
│     │     │  │  │  ├─ dpo_hyperparameters_param.py
│     │     │  │  │  ├─ dpo_method.py
│     │     │  │  │  ├─ dpo_method_param.py
│     │     │  │  │  ├─ fine_tuning_job.py
│     │     │  │  │  ├─ fine_tuning_job_event.py
│     │     │  │  │  ├─ fine_tuning_job_integration.py
│     │     │  │  │  ├─ fine_tuning_job_wandb_integration.py
│     │     │  │  │  ├─ fine_tuning_job_wandb_integration_object.py
│     │     │  │  │  ├─ jobs
│     │     │  │  │  │  ├─ checkpoint_list_params.py
│     │     │  │  │  │  ├─ fine_tuning_job_checkpoint.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ checkpoint_list_params.cpython-311.pyc
│     │     │  │  │  │     ├─ fine_tuning_job_checkpoint.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ job_create_params.py
│     │     │  │  │  ├─ job_list_events_params.py
│     │     │  │  │  ├─ job_list_params.py
│     │     │  │  │  ├─ reinforcement_hyperparameters.py
│     │     │  │  │  ├─ reinforcement_hyperparameters_param.py
│     │     │  │  │  ├─ reinforcement_method.py
│     │     │  │  │  ├─ reinforcement_method_param.py
│     │     │  │  │  ├─ supervised_hyperparameters.py
│     │     │  │  │  ├─ supervised_hyperparameters_param.py
│     │     │  │  │  ├─ supervised_method.py
│     │     │  │  │  ├─ supervised_method_param.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ dpo_hyperparameters.cpython-311.pyc
│     │     │  │  │     ├─ dpo_hyperparameters_param.cpython-311.pyc
│     │     │  │  │     ├─ dpo_method.cpython-311.pyc
│     │     │  │  │     ├─ dpo_method_param.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_event.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_integration.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_wandb_integration.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_wandb_integration_object.cpython-311.pyc
│     │     │  │  │     ├─ job_create_params.cpython-311.pyc
│     │     │  │  │     ├─ job_list_events_params.cpython-311.pyc
│     │     │  │  │     ├─ job_list_params.cpython-311.pyc
│     │     │  │  │     ├─ reinforcement_hyperparameters.cpython-311.pyc
│     │     │  │  │     ├─ reinforcement_hyperparameters_param.cpython-311.pyc
│     │     │  │  │     ├─ reinforcement_method.cpython-311.pyc
│     │     │  │  │     ├─ reinforcement_method_param.cpython-311.pyc
│     │     │  │  │     ├─ supervised_hyperparameters.cpython-311.pyc
│     │     │  │  │     ├─ supervised_hyperparameters_param.cpython-311.pyc
│     │     │  │  │     ├─ supervised_method.cpython-311.pyc
│     │     │  │  │     ├─ supervised_method_param.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ graders
│     │     │  │  │  ├─ grader_inputs.py
│     │     │  │  │  ├─ grader_inputs_param.py
│     │     │  │  │  ├─ label_model_grader.py
│     │     │  │  │  ├─ label_model_grader_param.py
│     │     │  │  │  ├─ multi_grader.py
│     │     │  │  │  ├─ multi_grader_param.py
│     │     │  │  │  ├─ python_grader.py
│     │     │  │  │  ├─ python_grader_param.py
│     │     │  │  │  ├─ score_model_grader.py
│     │     │  │  │  ├─ score_model_grader_param.py
│     │     │  │  │  ├─ string_check_grader.py
│     │     │  │  │  ├─ string_check_grader_param.py
│     │     │  │  │  ├─ text_similarity_grader.py
│     │     │  │  │  ├─ text_similarity_grader_param.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ grader_inputs.cpython-311.pyc
│     │     │  │  │     ├─ grader_inputs_param.cpython-311.pyc
│     │     │  │  │     ├─ label_model_grader.cpython-311.pyc
│     │     │  │  │     ├─ label_model_grader_param.cpython-311.pyc
│     │     │  │  │     ├─ multi_grader.cpython-311.pyc
│     │     │  │  │     ├─ multi_grader_param.cpython-311.pyc
│     │     │  │  │     ├─ python_grader.cpython-311.pyc
│     │     │  │  │     ├─ python_grader_param.cpython-311.pyc
│     │     │  │  │     ├─ score_model_grader.cpython-311.pyc
│     │     │  │  │     ├─ score_model_grader_param.cpython-311.pyc
│     │     │  │  │     ├─ string_check_grader.cpython-311.pyc
│     │     │  │  │     ├─ string_check_grader_param.cpython-311.pyc
│     │     │  │  │     ├─ text_similarity_grader.cpython-311.pyc
│     │     │  │  │     ├─ text_similarity_grader_param.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ image.py
│     │     │  │  ├─ images_response.py
│     │     │  │  ├─ image_create_variation_params.py
│     │     │  │  ├─ image_edit_completed_event.py
│     │     │  │  ├─ image_edit_params.py
│     │     │  │  ├─ image_edit_partial_image_event.py
│     │     │  │  ├─ image_edit_stream_event.py
│     │     │  │  ├─ image_generate_params.py
│     │     │  │  ├─ image_gen_completed_event.py
│     │     │  │  ├─ image_gen_partial_image_event.py
│     │     │  │  ├─ image_gen_stream_event.py
│     │     │  │  ├─ image_input_reference_param.py
│     │     │  │  ├─ image_model.py
│     │     │  │  ├─ model.py
│     │     │  │  ├─ model_deleted.py
│     │     │  │  ├─ moderation.py
│     │     │  │  ├─ moderation_create_params.py
│     │     │  │  ├─ moderation_create_response.py
│     │     │  │  ├─ moderation_image_url_input_param.py
│     │     │  │  ├─ moderation_model.py
│     │     │  │  ├─ moderation_multi_modal_input_param.py
│     │     │  │  ├─ moderation_text_input_param.py
│     │     │  │  ├─ other_file_chunking_strategy_object.py
│     │     │  │  ├─ realtime
│     │     │  │  │  ├─ audio_transcription.py
│     │     │  │  │  ├─ audio_transcription_param.py
│     │     │  │  │  ├─ call_accept_params.py
│     │     │  │  │  ├─ call_create_params.py
│     │     │  │  │  ├─ call_refer_params.py
│     │     │  │  │  ├─ call_reject_params.py
│     │     │  │  │  ├─ client_secret_create_params.py
│     │     │  │  │  ├─ client_secret_create_response.py
│     │     │  │  │  ├─ conversation_created_event.py
│     │     │  │  │  ├─ conversation_item.py
│     │     │  │  │  ├─ conversation_item_added.py
│     │     │  │  │  ├─ conversation_item_created_event.py
│     │     │  │  │  ├─ conversation_item_create_event.py
│     │     │  │  │  ├─ conversation_item_create_event_param.py
│     │     │  │  │  ├─ conversation_item_deleted_event.py
│     │     │  │  │  ├─ conversation_item_delete_event.py
│     │     │  │  │  ├─ conversation_item_delete_event_param.py
│     │     │  │  │  ├─ conversation_item_done.py
│     │     │  │  │  ├─ conversation_item_input_audio_transcription_completed_event.py
│     │     │  │  │  ├─ conversation_item_input_audio_transcription_delta_event.py
│     │     │  │  │  ├─ conversation_item_input_audio_transcription_failed_event.py
│     │     │  │  │  ├─ conversation_item_input_audio_transcription_segment.py
│     │     │  │  │  ├─ conversation_item_param.py
│     │     │  │  │  ├─ conversation_item_retrieve_event.py
│     │     │  │  │  ├─ conversation_item_retrieve_event_param.py
│     │     │  │  │  ├─ conversation_item_truncated_event.py
│     │     │  │  │  ├─ conversation_item_truncate_event.py
│     │     │  │  │  ├─ conversation_item_truncate_event_param.py
│     │     │  │  │  ├─ input_audio_buffer_append_event.py
│     │     │  │  │  ├─ input_audio_buffer_append_event_param.py
│     │     │  │  │  ├─ input_audio_buffer_cleared_event.py
│     │     │  │  │  ├─ input_audio_buffer_clear_event.py
│     │     │  │  │  ├─ input_audio_buffer_clear_event_param.py
│     │     │  │  │  ├─ input_audio_buffer_committed_event.py
│     │     │  │  │  ├─ input_audio_buffer_commit_event.py
│     │     │  │  │  ├─ input_audio_buffer_commit_event_param.py
│     │     │  │  │  ├─ input_audio_buffer_dtmf_event_received_event.py
│     │     │  │  │  ├─ input_audio_buffer_speech_started_event.py
│     │     │  │  │  ├─ input_audio_buffer_speech_stopped_event.py
│     │     │  │  │  ├─ input_audio_buffer_timeout_triggered.py
│     │     │  │  │  ├─ log_prob_properties.py
│     │     │  │  │  ├─ mcp_list_tools_completed.py
│     │     │  │  │  ├─ mcp_list_tools_failed.py
│     │     │  │  │  ├─ mcp_list_tools_in_progress.py
│     │     │  │  │  ├─ noise_reduction_type.py
│     │     │  │  │  ├─ output_audio_buffer_clear_event.py
│     │     │  │  │  ├─ output_audio_buffer_clear_event_param.py
│     │     │  │  │  ├─ rate_limits_updated_event.py
│     │     │  │  │  ├─ realtime_audio_config.py
│     │     │  │  │  ├─ realtime_audio_config_input.py
│     │     │  │  │  ├─ realtime_audio_config_input_param.py
│     │     │  │  │  ├─ realtime_audio_config_output.py
│     │     │  │  │  ├─ realtime_audio_config_output_param.py
│     │     │  │  │  ├─ realtime_audio_config_param.py
│     │     │  │  │  ├─ realtime_audio_formats.py
│     │     │  │  │  ├─ realtime_audio_formats_param.py
│     │     │  │  │  ├─ realtime_audio_input_turn_detection.py
│     │     │  │  │  ├─ realtime_audio_input_turn_detection_param.py
│     │     │  │  │  ├─ realtime_client_event.py
│     │     │  │  │  ├─ realtime_client_event_param.py
│     │     │  │  │  ├─ realtime_connect_params.py
│     │     │  │  │  ├─ realtime_conversation_item_assistant_message.py
│     │     │  │  │  ├─ realtime_conversation_item_assistant_message_param.py
│     │     │  │  │  ├─ realtime_conversation_item_function_call.py
│     │     │  │  │  ├─ realtime_conversation_item_function_call_output.py
│     │     │  │  │  ├─ realtime_conversation_item_function_call_output_param.py
│     │     │  │  │  ├─ realtime_conversation_item_function_call_param.py
│     │     │  │  │  ├─ realtime_conversation_item_system_message.py
│     │     │  │  │  ├─ realtime_conversation_item_system_message_param.py
│     │     │  │  │  ├─ realtime_conversation_item_user_message.py
│     │     │  │  │  ├─ realtime_conversation_item_user_message_param.py
│     │     │  │  │  ├─ realtime_error.py
│     │     │  │  │  ├─ realtime_error_event.py
│     │     │  │  │  ├─ realtime_function_tool.py
│     │     │  │  │  ├─ realtime_function_tool_param.py
│     │     │  │  │  ├─ realtime_mcphttp_error.py
│     │     │  │  │  ├─ realtime_mcphttp_error_param.py
│     │     │  │  │  ├─ realtime_mcp_approval_request.py
│     │     │  │  │  ├─ realtime_mcp_approval_request_param.py
│     │     │  │  │  ├─ realtime_mcp_approval_response.py
│     │     │  │  │  ├─ realtime_mcp_approval_response_param.py
│     │     │  │  │  ├─ realtime_mcp_list_tools.py
│     │     │  │  │  ├─ realtime_mcp_list_tools_param.py
│     │     │  │  │  ├─ realtime_mcp_protocol_error.py
│     │     │  │  │  ├─ realtime_mcp_protocol_error_param.py
│     │     │  │  │  ├─ realtime_mcp_tool_call.py
│     │     │  │  │  ├─ realtime_mcp_tool_call_param.py
│     │     │  │  │  ├─ realtime_mcp_tool_execution_error.py
│     │     │  │  │  ├─ realtime_mcp_tool_execution_error_param.py
│     │     │  │  │  ├─ realtime_response.py
│     │     │  │  │  ├─ realtime_response_create_audio_output.py
│     │     │  │  │  ├─ realtime_response_create_audio_output_param.py
│     │     │  │  │  ├─ realtime_response_create_mcp_tool.py
│     │     │  │  │  ├─ realtime_response_create_mcp_tool_param.py
│     │     │  │  │  ├─ realtime_response_create_params.py
│     │     │  │  │  ├─ realtime_response_create_params_param.py
│     │     │  │  │  ├─ realtime_response_status.py
│     │     │  │  │  ├─ realtime_response_usage.py
│     │     │  │  │  ├─ realtime_response_usage_input_token_details.py
│     │     │  │  │  ├─ realtime_response_usage_output_token_details.py
│     │     │  │  │  ├─ realtime_server_event.py
│     │     │  │  │  ├─ realtime_session_client_secret.py
│     │     │  │  │  ├─ realtime_session_create_request.py
│     │     │  │  │  ├─ realtime_session_create_request_param.py
│     │     │  │  │  ├─ realtime_session_create_response.py
│     │     │  │  │  ├─ realtime_tools_config.py
│     │     │  │  │  ├─ realtime_tools_config_param.py
│     │     │  │  │  ├─ realtime_tools_config_union.py
│     │     │  │  │  ├─ realtime_tools_config_union_param.py
│     │     │  │  │  ├─ realtime_tool_choice_config.py
│     │     │  │  │  ├─ realtime_tool_choice_config_param.py
│     │     │  │  │  ├─ realtime_tracing_config.py
│     │     │  │  │  ├─ realtime_tracing_config_param.py
│     │     │  │  │  ├─ realtime_transcription_session_audio.py
│     │     │  │  │  ├─ realtime_transcription_session_audio_input.py
│     │     │  │  │  ├─ realtime_transcription_session_audio_input_param.py
│     │     │  │  │  ├─ realtime_transcription_session_audio_input_turn_detection.py
│     │     │  │  │  ├─ realtime_transcription_session_audio_input_turn_detection_param.py
│     │     │  │  │  ├─ realtime_transcription_session_audio_param.py
│     │     │  │  │  ├─ realtime_transcription_session_create_request.py
│     │     │  │  │  ├─ realtime_transcription_session_create_request_param.py
│     │     │  │  │  ├─ realtime_transcription_session_create_response.py
│     │     │  │  │  ├─ realtime_transcription_session_turn_detection.py
│     │     │  │  │  ├─ realtime_truncation.py
│     │     │  │  │  ├─ realtime_truncation_param.py
│     │     │  │  │  ├─ realtime_truncation_retention_ratio.py
│     │     │  │  │  ├─ realtime_truncation_retention_ratio_param.py
│     │     │  │  │  ├─ response_audio_delta_event.py
│     │     │  │  │  ├─ response_audio_done_event.py
│     │     │  │  │  ├─ response_audio_transcript_delta_event.py
│     │     │  │  │  ├─ response_audio_transcript_done_event.py
│     │     │  │  │  ├─ response_cancel_event.py
│     │     │  │  │  ├─ response_cancel_event_param.py
│     │     │  │  │  ├─ response_content_part_added_event.py
│     │     │  │  │  ├─ response_content_part_done_event.py
│     │     │  │  │  ├─ response_created_event.py
│     │     │  │  │  ├─ response_create_event.py
│     │     │  │  │  ├─ response_create_event_param.py
│     │     │  │  │  ├─ response_done_event.py
│     │     │  │  │  ├─ response_function_call_arguments_delta_event.py
│     │     │  │  │  ├─ response_function_call_arguments_done_event.py
│     │     │  │  │  ├─ response_mcp_call_arguments_delta.py
│     │     │  │  │  ├─ response_mcp_call_arguments_done.py
│     │     │  │  │  ├─ response_mcp_call_completed.py
│     │     │  │  │  ├─ response_mcp_call_failed.py
│     │     │  │  │  ├─ response_mcp_call_in_progress.py
│     │     │  │  │  ├─ response_output_item_added_event.py
│     │     │  │  │  ├─ response_output_item_done_event.py
│     │     │  │  │  ├─ response_text_delta_event.py
│     │     │  │  │  ├─ response_text_done_event.py
│     │     │  │  │  ├─ session_created_event.py
│     │     │  │  │  ├─ session_updated_event.py
│     │     │  │  │  ├─ session_update_event.py
│     │     │  │  │  ├─ session_update_event_param.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ audio_transcription.cpython-311.pyc
│     │     │  │  │     ├─ audio_transcription_param.cpython-311.pyc
│     │     │  │  │     ├─ call_accept_params.cpython-311.pyc
│     │     │  │  │     ├─ call_create_params.cpython-311.pyc
│     │     │  │  │     ├─ call_refer_params.cpython-311.pyc
│     │     │  │  │     ├─ call_reject_params.cpython-311.pyc
│     │     │  │  │     ├─ client_secret_create_params.cpython-311.pyc
│     │     │  │  │     ├─ client_secret_create_response.cpython-311.pyc
│     │     │  │  │     ├─ conversation_created_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_added.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_created_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_create_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_create_event_param.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_deleted_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_delete_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_delete_event_param.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_done.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_input_audio_transcription_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_input_audio_transcription_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_input_audio_transcription_failed_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_input_audio_transcription_segment.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_param.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_retrieve_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_retrieve_event_param.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_truncated_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_truncate_event.cpython-311.pyc
│     │     │  │  │     ├─ conversation_item_truncate_event_param.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_append_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_append_event_param.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_cleared_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_clear_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_clear_event_param.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_committed_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_commit_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_commit_event_param.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_dtmf_event_received_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_speech_started_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_speech_stopped_event.cpython-311.pyc
│     │     │  │  │     ├─ input_audio_buffer_timeout_triggered.cpython-311.pyc
│     │     │  │  │     ├─ log_prob_properties.cpython-311.pyc
│     │     │  │  │     ├─ mcp_list_tools_completed.cpython-311.pyc
│     │     │  │  │     ├─ mcp_list_tools_failed.cpython-311.pyc
│     │     │  │  │     ├─ mcp_list_tools_in_progress.cpython-311.pyc
│     │     │  │  │     ├─ noise_reduction_type.cpython-311.pyc
│     │     │  │  │     ├─ output_audio_buffer_clear_event.cpython-311.pyc
│     │     │  │  │     ├─ output_audio_buffer_clear_event_param.cpython-311.pyc
│     │     │  │  │     ├─ rate_limits_updated_event.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config_input.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config_input_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config_output.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config_output_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_config_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_formats.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_formats_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_input_turn_detection.cpython-311.pyc
│     │     │  │  │     ├─ realtime_audio_input_turn_detection_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_client_event.cpython-311.pyc
│     │     │  │  │     ├─ realtime_client_event_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_connect_params.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_assistant_message.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_assistant_message_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_function_call.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_function_call_output.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_function_call_output_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_function_call_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_system_message.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_system_message_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_user_message.cpython-311.pyc
│     │     │  │  │     ├─ realtime_conversation_item_user_message_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_error.cpython-311.pyc
│     │     │  │  │     ├─ realtime_error_event.cpython-311.pyc
│     │     │  │  │     ├─ realtime_function_tool.cpython-311.pyc
│     │     │  │  │     ├─ realtime_function_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcphttp_error.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcphttp_error_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_approval_request.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_approval_request_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_approval_response.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_approval_response_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_list_tools.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_list_tools_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_protocol_error.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_protocol_error_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_tool_execution_error.cpython-311.pyc
│     │     │  │  │     ├─ realtime_mcp_tool_execution_error_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_audio_output.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_audio_output_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_mcp_tool.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_mcp_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_params.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_create_params_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_status.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_usage.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_usage_input_token_details.cpython-311.pyc
│     │     │  │  │     ├─ realtime_response_usage_output_token_details.cpython-311.pyc
│     │     │  │  │     ├─ realtime_server_event.cpython-311.pyc
│     │     │  │  │     ├─ realtime_session_client_secret.cpython-311.pyc
│     │     │  │  │     ├─ realtime_session_create_request.cpython-311.pyc
│     │     │  │  │     ├─ realtime_session_create_request_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_session_create_response.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tools_config.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tools_config_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tools_config_union.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tools_config_union_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tool_choice_config.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tool_choice_config_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tracing_config.cpython-311.pyc
│     │     │  │  │     ├─ realtime_tracing_config_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio_input.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio_input_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio_input_turn_detection.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio_input_turn_detection_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_audio_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_create_request.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_create_request_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_create_response.cpython-311.pyc
│     │     │  │  │     ├─ realtime_transcription_session_turn_detection.cpython-311.pyc
│     │     │  │  │     ├─ realtime_truncation.cpython-311.pyc
│     │     │  │  │     ├─ realtime_truncation_param.cpython-311.pyc
│     │     │  │  │     ├─ realtime_truncation_retention_ratio.cpython-311.pyc
│     │     │  │  │     ├─ realtime_truncation_retention_ratio_param.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_transcript_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_transcript_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_cancel_event.cpython-311.pyc
│     │     │  │  │     ├─ response_cancel_event_param.cpython-311.pyc
│     │     │  │  │     ├─ response_content_part_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_content_part_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_created_event.cpython-311.pyc
│     │     │  │  │     ├─ response_create_event.cpython-311.pyc
│     │     │  │  │     ├─ response_create_event_param.cpython-311.pyc
│     │     │  │  │     ├─ response_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_arguments_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_arguments_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_arguments_delta.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_arguments_done.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_completed.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_failed.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_in_progress.cpython-311.pyc
│     │     │  │  │     ├─ response_output_item_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_output_item_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_text_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_text_done_event.cpython-311.pyc
│     │     │  │  │     ├─ session_created_event.cpython-311.pyc
│     │     │  │  │     ├─ session_updated_event.cpython-311.pyc
│     │     │  │  │     ├─ session_update_event.cpython-311.pyc
│     │     │  │  │     ├─ session_update_event_param.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ responses
│     │     │  │  │  ├─ apply_patch_tool.py
│     │     │  │  │  ├─ apply_patch_tool_param.py
│     │     │  │  │  ├─ compacted_response.py
│     │     │  │  │  ├─ computer_action.py
│     │     │  │  │  ├─ computer_action_list.py
│     │     │  │  │  ├─ computer_action_list_param.py
│     │     │  │  │  ├─ computer_action_param.py
│     │     │  │  │  ├─ computer_tool.py
│     │     │  │  │  ├─ computer_tool_param.py
│     │     │  │  │  ├─ computer_use_preview_tool.py
│     │     │  │  │  ├─ computer_use_preview_tool_param.py
│     │     │  │  │  ├─ container_auto.py
│     │     │  │  │  ├─ container_auto_param.py
│     │     │  │  │  ├─ container_network_policy_allowlist.py
│     │     │  │  │  ├─ container_network_policy_allowlist_param.py
│     │     │  │  │  ├─ container_network_policy_disabled.py
│     │     │  │  │  ├─ container_network_policy_disabled_param.py
│     │     │  │  │  ├─ container_network_policy_domain_secret.py
│     │     │  │  │  ├─ container_network_policy_domain_secret_param.py
│     │     │  │  │  ├─ container_reference.py
│     │     │  │  │  ├─ container_reference_param.py
│     │     │  │  │  ├─ custom_tool.py
│     │     │  │  │  ├─ custom_tool_param.py
│     │     │  │  │  ├─ easy_input_message.py
│     │     │  │  │  ├─ easy_input_message_param.py
│     │     │  │  │  ├─ file_search_tool.py
│     │     │  │  │  ├─ file_search_tool_param.py
│     │     │  │  │  ├─ function_shell_tool.py
│     │     │  │  │  ├─ function_shell_tool_param.py
│     │     │  │  │  ├─ function_tool.py
│     │     │  │  │  ├─ function_tool_param.py
│     │     │  │  │  ├─ inline_skill.py
│     │     │  │  │  ├─ inline_skill_param.py
│     │     │  │  │  ├─ inline_skill_source.py
│     │     │  │  │  ├─ inline_skill_source_param.py
│     │     │  │  │  ├─ input_item_list_params.py
│     │     │  │  │  ├─ input_token_count_params.py
│     │     │  │  │  ├─ input_token_count_response.py
│     │     │  │  │  ├─ local_environment.py
│     │     │  │  │  ├─ local_environment_param.py
│     │     │  │  │  ├─ local_skill.py
│     │     │  │  │  ├─ local_skill_param.py
│     │     │  │  │  ├─ namespace_tool.py
│     │     │  │  │  ├─ namespace_tool_param.py
│     │     │  │  │  ├─ parsed_response.py
│     │     │  │  │  ├─ response.py
│     │     │  │  │  ├─ responses_client_event.py
│     │     │  │  │  ├─ responses_client_event_param.py
│     │     │  │  │  ├─ responses_server_event.py
│     │     │  │  │  ├─ response_apply_patch_tool_call.py
│     │     │  │  │  ├─ response_apply_patch_tool_call_output.py
│     │     │  │  │  ├─ response_audio_delta_event.py
│     │     │  │  │  ├─ response_audio_done_event.py
│     │     │  │  │  ├─ response_audio_transcript_delta_event.py
│     │     │  │  │  ├─ response_audio_transcript_done_event.py
│     │     │  │  │  ├─ response_code_interpreter_call_code_delta_event.py
│     │     │  │  │  ├─ response_code_interpreter_call_code_done_event.py
│     │     │  │  │  ├─ response_code_interpreter_call_completed_event.py
│     │     │  │  │  ├─ response_code_interpreter_call_interpreting_event.py
│     │     │  │  │  ├─ response_code_interpreter_call_in_progress_event.py
│     │     │  │  │  ├─ response_code_interpreter_tool_call.py
│     │     │  │  │  ├─ response_code_interpreter_tool_call_param.py
│     │     │  │  │  ├─ response_compaction_item.py
│     │     │  │  │  ├─ response_compaction_item_param.py
│     │     │  │  │  ├─ response_compaction_item_param_param.py
│     │     │  │  │  ├─ response_compact_params.py
│     │     │  │  │  ├─ response_completed_event.py
│     │     │  │  │  ├─ response_computer_tool_call.py
│     │     │  │  │  ├─ response_computer_tool_call_output_item.py
│     │     │  │  │  ├─ response_computer_tool_call_output_screenshot.py
│     │     │  │  │  ├─ response_computer_tool_call_output_screenshot_param.py
│     │     │  │  │  ├─ response_computer_tool_call_param.py
│     │     │  │  │  ├─ response_container_reference.py
│     │     │  │  │  ├─ response_content_part_added_event.py
│     │     │  │  │  ├─ response_content_part_done_event.py
│     │     │  │  │  ├─ response_conversation_param.py
│     │     │  │  │  ├─ response_conversation_param_param.py
│     │     │  │  │  ├─ response_created_event.py
│     │     │  │  │  ├─ response_create_params.py
│     │     │  │  │  ├─ response_custom_tool_call.py
│     │     │  │  │  ├─ response_custom_tool_call_input_delta_event.py
│     │     │  │  │  ├─ response_custom_tool_call_input_done_event.py
│     │     │  │  │  ├─ response_custom_tool_call_item.py
│     │     │  │  │  ├─ response_custom_tool_call_output.py
│     │     │  │  │  ├─ response_custom_tool_call_output_item.py
│     │     │  │  │  ├─ response_custom_tool_call_output_param.py
│     │     │  │  │  ├─ response_custom_tool_call_param.py
│     │     │  │  │  ├─ response_error.py
│     │     │  │  │  ├─ response_error_event.py
│     │     │  │  │  ├─ response_failed_event.py
│     │     │  │  │  ├─ response_file_search_call_completed_event.py
│     │     │  │  │  ├─ response_file_search_call_in_progress_event.py
│     │     │  │  │  ├─ response_file_search_call_searching_event.py
│     │     │  │  │  ├─ response_file_search_tool_call.py
│     │     │  │  │  ├─ response_file_search_tool_call_param.py
│     │     │  │  │  ├─ response_format_text_config.py
│     │     │  │  │  ├─ response_format_text_config_param.py
│     │     │  │  │  ├─ response_format_text_json_schema_config.py
│     │     │  │  │  ├─ response_format_text_json_schema_config_param.py
│     │     │  │  │  ├─ response_function_call_arguments_delta_event.py
│     │     │  │  │  ├─ response_function_call_arguments_done_event.py
│     │     │  │  │  ├─ response_function_call_output_item.py
│     │     │  │  │  ├─ response_function_call_output_item_list.py
│     │     │  │  │  ├─ response_function_call_output_item_list_param.py
│     │     │  │  │  ├─ response_function_call_output_item_param.py
│     │     │  │  │  ├─ response_function_shell_call_output_content.py
│     │     │  │  │  ├─ response_function_shell_call_output_content_param.py
│     │     │  │  │  ├─ response_function_shell_tool_call.py
│     │     │  │  │  ├─ response_function_shell_tool_call_output.py
│     │     │  │  │  ├─ response_function_tool_call.py
│     │     │  │  │  ├─ response_function_tool_call_item.py
│     │     │  │  │  ├─ response_function_tool_call_output_item.py
│     │     │  │  │  ├─ response_function_tool_call_param.py
│     │     │  │  │  ├─ response_function_web_search.py
│     │     │  │  │  ├─ response_function_web_search_param.py
│     │     │  │  │  ├─ response_image_gen_call_completed_event.py
│     │     │  │  │  ├─ response_image_gen_call_generating_event.py
│     │     │  │  │  ├─ response_image_gen_call_in_progress_event.py
│     │     │  │  │  ├─ response_image_gen_call_partial_image_event.py
│     │     │  │  │  ├─ response_includable.py
│     │     │  │  │  ├─ response_incomplete_event.py
│     │     │  │  │  ├─ response_input.py
│     │     │  │  │  ├─ response_input_audio.py
│     │     │  │  │  ├─ response_input_audio_param.py
│     │     │  │  │  ├─ response_input_content.py
│     │     │  │  │  ├─ response_input_content_param.py
│     │     │  │  │  ├─ response_input_file.py
│     │     │  │  │  ├─ response_input_file_content.py
│     │     │  │  │  ├─ response_input_file_content_param.py
│     │     │  │  │  ├─ response_input_file_param.py
│     │     │  │  │  ├─ response_input_image.py
│     │     │  │  │  ├─ response_input_image_content.py
│     │     │  │  │  ├─ response_input_image_content_param.py
│     │     │  │  │  ├─ response_input_image_param.py
│     │     │  │  │  ├─ response_input_item.py
│     │     │  │  │  ├─ response_input_item_param.py
│     │     │  │  │  ├─ response_input_message_content_list.py
│     │     │  │  │  ├─ response_input_message_content_list_param.py
│     │     │  │  │  ├─ response_input_message_item.py
│     │     │  │  │  ├─ response_input_param.py
│     │     │  │  │  ├─ response_input_text.py
│     │     │  │  │  ├─ response_input_text_content.py
│     │     │  │  │  ├─ response_input_text_content_param.py
│     │     │  │  │  ├─ response_input_text_param.py
│     │     │  │  │  ├─ response_in_progress_event.py
│     │     │  │  │  ├─ response_item.py
│     │     │  │  │  ├─ response_item_list.py
│     │     │  │  │  ├─ response_local_environment.py
│     │     │  │  │  ├─ response_mcp_call_arguments_delta_event.py
│     │     │  │  │  ├─ response_mcp_call_arguments_done_event.py
│     │     │  │  │  ├─ response_mcp_call_completed_event.py
│     │     │  │  │  ├─ response_mcp_call_failed_event.py
│     │     │  │  │  ├─ response_mcp_call_in_progress_event.py
│     │     │  │  │  ├─ response_mcp_list_tools_completed_event.py
│     │     │  │  │  ├─ response_mcp_list_tools_failed_event.py
│     │     │  │  │  ├─ response_mcp_list_tools_in_progress_event.py
│     │     │  │  │  ├─ response_output_item.py
│     │     │  │  │  ├─ response_output_item_added_event.py
│     │     │  │  │  ├─ response_output_item_done_event.py
│     │     │  │  │  ├─ response_output_message.py
│     │     │  │  │  ├─ response_output_message_param.py
│     │     │  │  │  ├─ response_output_refusal.py
│     │     │  │  │  ├─ response_output_refusal_param.py
│     │     │  │  │  ├─ response_output_text.py
│     │     │  │  │  ├─ response_output_text_annotation_added_event.py
│     │     │  │  │  ├─ response_output_text_param.py
│     │     │  │  │  ├─ response_prompt.py
│     │     │  │  │  ├─ response_prompt_param.py
│     │     │  │  │  ├─ response_queued_event.py
│     │     │  │  │  ├─ response_reasoning_item.py
│     │     │  │  │  ├─ response_reasoning_item_param.py
│     │     │  │  │  ├─ response_reasoning_summary_part_added_event.py
│     │     │  │  │  ├─ response_reasoning_summary_part_done_event.py
│     │     │  │  │  ├─ response_reasoning_summary_text_delta_event.py
│     │     │  │  │  ├─ response_reasoning_summary_text_done_event.py
│     │     │  │  │  ├─ response_reasoning_text_delta_event.py
│     │     │  │  │  ├─ response_reasoning_text_done_event.py
│     │     │  │  │  ├─ response_refusal_delta_event.py
│     │     │  │  │  ├─ response_refusal_done_event.py
│     │     │  │  │  ├─ response_retrieve_params.py
│     │     │  │  │  ├─ response_status.py
│     │     │  │  │  ├─ response_stream_event.py
│     │     │  │  │  ├─ response_text_config.py
│     │     │  │  │  ├─ response_text_config_param.py
│     │     │  │  │  ├─ response_text_delta_event.py
│     │     │  │  │  ├─ response_text_done_event.py
│     │     │  │  │  ├─ response_tool_search_call.py
│     │     │  │  │  ├─ response_tool_search_output_item.py
│     │     │  │  │  ├─ response_tool_search_output_item_param.py
│     │     │  │  │  ├─ response_tool_search_output_item_param_param.py
│     │     │  │  │  ├─ response_usage.py
│     │     │  │  │  ├─ response_web_search_call_completed_event.py
│     │     │  │  │  ├─ response_web_search_call_in_progress_event.py
│     │     │  │  │  ├─ response_web_search_call_searching_event.py
│     │     │  │  │  ├─ skill_reference.py
│     │     │  │  │  ├─ skill_reference_param.py
│     │     │  │  │  ├─ tool.py
│     │     │  │  │  ├─ tool_choice_allowed.py
│     │     │  │  │  ├─ tool_choice_allowed_param.py
│     │     │  │  │  ├─ tool_choice_apply_patch.py
│     │     │  │  │  ├─ tool_choice_apply_patch_param.py
│     │     │  │  │  ├─ tool_choice_custom.py
│     │     │  │  │  ├─ tool_choice_custom_param.py
│     │     │  │  │  ├─ tool_choice_function.py
│     │     │  │  │  ├─ tool_choice_function_param.py
│     │     │  │  │  ├─ tool_choice_mcp.py
│     │     │  │  │  ├─ tool_choice_mcp_param.py
│     │     │  │  │  ├─ tool_choice_options.py
│     │     │  │  │  ├─ tool_choice_shell.py
│     │     │  │  │  ├─ tool_choice_shell_param.py
│     │     │  │  │  ├─ tool_choice_types.py
│     │     │  │  │  ├─ tool_choice_types_param.py
│     │     │  │  │  ├─ tool_param.py
│     │     │  │  │  ├─ tool_search_tool.py
│     │     │  │  │  ├─ tool_search_tool_param.py
│     │     │  │  │  ├─ web_search_preview_tool.py
│     │     │  │  │  ├─ web_search_preview_tool_param.py
│     │     │  │  │  ├─ web_search_tool.py
│     │     │  │  │  ├─ web_search_tool_param.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ apply_patch_tool.cpython-311.pyc
│     │     │  │  │     ├─ apply_patch_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ compacted_response.cpython-311.pyc
│     │     │  │  │     ├─ computer_action.cpython-311.pyc
│     │     │  │  │     ├─ computer_action_list.cpython-311.pyc
│     │     │  │  │     ├─ computer_action_list_param.cpython-311.pyc
│     │     │  │  │     ├─ computer_action_param.cpython-311.pyc
│     │     │  │  │     ├─ computer_tool.cpython-311.pyc
│     │     │  │  │     ├─ computer_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ computer_use_preview_tool.cpython-311.pyc
│     │     │  │  │     ├─ computer_use_preview_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ container_auto.cpython-311.pyc
│     │     │  │  │     ├─ container_auto_param.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_allowlist.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_allowlist_param.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_disabled.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_disabled_param.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_domain_secret.cpython-311.pyc
│     │     │  │  │     ├─ container_network_policy_domain_secret_param.cpython-311.pyc
│     │     │  │  │     ├─ container_reference.cpython-311.pyc
│     │     │  │  │     ├─ container_reference_param.cpython-311.pyc
│     │     │  │  │     ├─ custom_tool.cpython-311.pyc
│     │     │  │  │     ├─ custom_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ easy_input_message.cpython-311.pyc
│     │     │  │  │     ├─ easy_input_message_param.cpython-311.pyc
│     │     │  │  │     ├─ file_search_tool.cpython-311.pyc
│     │     │  │  │     ├─ file_search_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ function_shell_tool.cpython-311.pyc
│     │     │  │  │     ├─ function_shell_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ function_tool.cpython-311.pyc
│     │     │  │  │     ├─ function_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ inline_skill.cpython-311.pyc
│     │     │  │  │     ├─ inline_skill_param.cpython-311.pyc
│     │     │  │  │     ├─ inline_skill_source.cpython-311.pyc
│     │     │  │  │     ├─ inline_skill_source_param.cpython-311.pyc
│     │     │  │  │     ├─ input_item_list_params.cpython-311.pyc
│     │     │  │  │     ├─ input_token_count_params.cpython-311.pyc
│     │     │  │  │     ├─ input_token_count_response.cpython-311.pyc
│     │     │  │  │     ├─ local_environment.cpython-311.pyc
│     │     │  │  │     ├─ local_environment_param.cpython-311.pyc
│     │     │  │  │     ├─ local_skill.cpython-311.pyc
│     │     │  │  │     ├─ local_skill_param.cpython-311.pyc
│     │     │  │  │     ├─ namespace_tool.cpython-311.pyc
│     │     │  │  │     ├─ namespace_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ parsed_response.cpython-311.pyc
│     │     │  │  │     ├─ response.cpython-311.pyc
│     │     │  │  │     ├─ responses_client_event.cpython-311.pyc
│     │     │  │  │     ├─ responses_client_event_param.cpython-311.pyc
│     │     │  │  │     ├─ responses_server_event.cpython-311.pyc
│     │     │  │  │     ├─ response_apply_patch_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_apply_patch_tool_call_output.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_transcript_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_audio_transcript_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_call_code_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_call_code_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_call_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_call_interpreting_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_call_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_code_interpreter_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ response_compaction_item.cpython-311.pyc
│     │     │  │  │     ├─ response_compaction_item_param.cpython-311.pyc
│     │     │  │  │     ├─ response_compaction_item_param_param.cpython-311.pyc
│     │     │  │  │     ├─ response_compact_params.cpython-311.pyc
│     │     │  │  │     ├─ response_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_computer_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_computer_tool_call_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_computer_tool_call_output_screenshot.cpython-311.pyc
│     │     │  │  │     ├─ response_computer_tool_call_output_screenshot_param.cpython-311.pyc
│     │     │  │  │     ├─ response_computer_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ response_container_reference.cpython-311.pyc
│     │     │  │  │     ├─ response_content_part_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_content_part_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_conversation_param.cpython-311.pyc
│     │     │  │  │     ├─ response_conversation_param_param.cpython-311.pyc
│     │     │  │  │     ├─ response_created_event.cpython-311.pyc
│     │     │  │  │     ├─ response_create_params.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_input_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_input_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_item.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_output.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_output_param.cpython-311.pyc
│     │     │  │  │     ├─ response_custom_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ response_error.cpython-311.pyc
│     │     │  │  │     ├─ response_error_event.cpython-311.pyc
│     │     │  │  │     ├─ response_failed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_file_search_call_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_file_search_call_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_file_search_call_searching_event.cpython-311.pyc
│     │     │  │  │     ├─ response_file_search_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_file_search_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_config.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_config_param.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_json_schema_config.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_json_schema_config_param.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_arguments_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_arguments_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_output_item_list.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_output_item_list_param.cpython-311.pyc
│     │     │  │  │     ├─ response_function_call_output_item_param.cpython-311.pyc
│     │     │  │  │     ├─ response_function_shell_call_output_content.cpython-311.pyc
│     │     │  │  │     ├─ response_function_shell_call_output_content_param.cpython-311.pyc
│     │     │  │  │     ├─ response_function_shell_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_function_shell_tool_call_output.cpython-311.pyc
│     │     │  │  │     ├─ response_function_tool_call.cpython-311.pyc
│     │     │  │  │     ├─ response_function_tool_call_item.cpython-311.pyc
│     │     │  │  │     ├─ response_function_tool_call_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_function_tool_call_param.cpython-311.pyc
│     │     │  │  │     ├─ response_function_web_search.cpython-311.pyc
│     │     │  │  │     ├─ response_function_web_search_param.cpython-311.pyc
│     │     │  │  │     ├─ response_image_gen_call_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_image_gen_call_generating_event.cpython-311.pyc
│     │     │  │  │     ├─ response_image_gen_call_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_image_gen_call_partial_image_event.cpython-311.pyc
│     │     │  │  │     ├─ response_includable.cpython-311.pyc
│     │     │  │  │     ├─ response_incomplete_event.cpython-311.pyc
│     │     │  │  │     ├─ response_input.cpython-311.pyc
│     │     │  │  │     ├─ response_input_audio.cpython-311.pyc
│     │     │  │  │     ├─ response_input_audio_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_content.cpython-311.pyc
│     │     │  │  │     ├─ response_input_content_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_file.cpython-311.pyc
│     │     │  │  │     ├─ response_input_file_content.cpython-311.pyc
│     │     │  │  │     ├─ response_input_file_content_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_file_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_image.cpython-311.pyc
│     │     │  │  │     ├─ response_input_image_content.cpython-311.pyc
│     │     │  │  │     ├─ response_input_image_content_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_image_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_item.cpython-311.pyc
│     │     │  │  │     ├─ response_input_item_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_message_content_list.cpython-311.pyc
│     │     │  │  │     ├─ response_input_message_content_list_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_message_item.cpython-311.pyc
│     │     │  │  │     ├─ response_input_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_text.cpython-311.pyc
│     │     │  │  │     ├─ response_input_text_content.cpython-311.pyc
│     │     │  │  │     ├─ response_input_text_content_param.cpython-311.pyc
│     │     │  │  │     ├─ response_input_text_param.cpython-311.pyc
│     │     │  │  │     ├─ response_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_item.cpython-311.pyc
│     │     │  │  │     ├─ response_item_list.cpython-311.pyc
│     │     │  │  │     ├─ response_local_environment.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_arguments_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_arguments_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_failed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_call_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_list_tools_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_list_tools_failed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_mcp_list_tools_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_output_item_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_output_item_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_output_message.cpython-311.pyc
│     │     │  │  │     ├─ response_output_message_param.cpython-311.pyc
│     │     │  │  │     ├─ response_output_refusal.cpython-311.pyc
│     │     │  │  │     ├─ response_output_refusal_param.cpython-311.pyc
│     │     │  │  │     ├─ response_output_text.cpython-311.pyc
│     │     │  │  │     ├─ response_output_text_annotation_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_output_text_param.cpython-311.pyc
│     │     │  │  │     ├─ response_prompt.cpython-311.pyc
│     │     │  │  │     ├─ response_prompt_param.cpython-311.pyc
│     │     │  │  │     ├─ response_queued_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_item.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_item_param.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_summary_part_added_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_summary_part_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_summary_text_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_summary_text_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_text_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_reasoning_text_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_refusal_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_refusal_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_retrieve_params.cpython-311.pyc
│     │     │  │  │     ├─ response_status.cpython-311.pyc
│     │     │  │  │     ├─ response_stream_event.cpython-311.pyc
│     │     │  │  │     ├─ response_text_config.cpython-311.pyc
│     │     │  │  │     ├─ response_text_config_param.cpython-311.pyc
│     │     │  │  │     ├─ response_text_delta_event.cpython-311.pyc
│     │     │  │  │     ├─ response_text_done_event.cpython-311.pyc
│     │     │  │  │     ├─ response_tool_search_call.cpython-311.pyc
│     │     │  │  │     ├─ response_tool_search_output_item.cpython-311.pyc
│     │     │  │  │     ├─ response_tool_search_output_item_param.cpython-311.pyc
│     │     │  │  │     ├─ response_tool_search_output_item_param_param.cpython-311.pyc
│     │     │  │  │     ├─ response_usage.cpython-311.pyc
│     │     │  │  │     ├─ response_web_search_call_completed_event.cpython-311.pyc
│     │     │  │  │     ├─ response_web_search_call_in_progress_event.cpython-311.pyc
│     │     │  │  │     ├─ response_web_search_call_searching_event.cpython-311.pyc
│     │     │  │  │     ├─ skill_reference.cpython-311.pyc
│     │     │  │  │     ├─ skill_reference_param.cpython-311.pyc
│     │     │  │  │     ├─ tool.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_allowed.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_allowed_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_apply_patch.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_apply_patch_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_custom.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_custom_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_function.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_function_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_mcp.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_mcp_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_options.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_shell.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_shell_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_types.cpython-311.pyc
│     │     │  │  │     ├─ tool_choice_types_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_param.cpython-311.pyc
│     │     │  │  │     ├─ tool_search_tool.cpython-311.pyc
│     │     │  │  │     ├─ tool_search_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ web_search_preview_tool.cpython-311.pyc
│     │     │  │  │     ├─ web_search_preview_tool_param.cpython-311.pyc
│     │     │  │  │     ├─ web_search_tool.cpython-311.pyc
│     │     │  │  │     ├─ web_search_tool_param.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ shared
│     │     │  │  │  ├─ all_models.py
│     │     │  │  │  ├─ chat_model.py
│     │     │  │  │  ├─ comparison_filter.py
│     │     │  │  │  ├─ compound_filter.py
│     │     │  │  │  ├─ custom_tool_input_format.py
│     │     │  │  │  ├─ error_object.py
│     │     │  │  │  ├─ function_definition.py
│     │     │  │  │  ├─ function_parameters.py
│     │     │  │  │  ├─ metadata.py
│     │     │  │  │  ├─ oauth_error_code.py
│     │     │  │  │  ├─ reasoning.py
│     │     │  │  │  ├─ reasoning_effort.py
│     │     │  │  │  ├─ responses_model.py
│     │     │  │  │  ├─ response_format_json_object.py
│     │     │  │  │  ├─ response_format_json_schema.py
│     │     │  │  │  ├─ response_format_text.py
│     │     │  │  │  ├─ response_format_text_grammar.py
│     │     │  │  │  ├─ response_format_text_python.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ all_models.cpython-311.pyc
│     │     │  │  │     ├─ chat_model.cpython-311.pyc
│     │     │  │  │     ├─ comparison_filter.cpython-311.pyc
│     │     │  │  │     ├─ compound_filter.cpython-311.pyc
│     │     │  │  │     ├─ custom_tool_input_format.cpython-311.pyc
│     │     │  │  │     ├─ error_object.cpython-311.pyc
│     │     │  │  │     ├─ function_definition.cpython-311.pyc
│     │     │  │  │     ├─ function_parameters.cpython-311.pyc
│     │     │  │  │     ├─ metadata.cpython-311.pyc
│     │     │  │  │     ├─ oauth_error_code.cpython-311.pyc
│     │     │  │  │     ├─ reasoning.cpython-311.pyc
│     │     │  │  │     ├─ reasoning_effort.cpython-311.pyc
│     │     │  │  │     ├─ responses_model.cpython-311.pyc
│     │     │  │  │     ├─ response_format_json_object.cpython-311.pyc
│     │     │  │  │     ├─ response_format_json_schema.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_grammar.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text_python.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ shared_params
│     │     │  │  │  ├─ chat_model.py
│     │     │  │  │  ├─ comparison_filter.py
│     │     │  │  │  ├─ compound_filter.py
│     │     │  │  │  ├─ custom_tool_input_format.py
│     │     │  │  │  ├─ function_definition.py
│     │     │  │  │  ├─ function_parameters.py
│     │     │  │  │  ├─ metadata.py
│     │     │  │  │  ├─ oauth_error_code.py
│     │     │  │  │  ├─ reasoning.py
│     │     │  │  │  ├─ reasoning_effort.py
│     │     │  │  │  ├─ responses_model.py
│     │     │  │  │  ├─ response_format_json_object.py
│     │     │  │  │  ├─ response_format_json_schema.py
│     │     │  │  │  ├─ response_format_text.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ chat_model.cpython-311.pyc
│     │     │  │  │     ├─ comparison_filter.cpython-311.pyc
│     │     │  │  │     ├─ compound_filter.cpython-311.pyc
│     │     │  │  │     ├─ custom_tool_input_format.cpython-311.pyc
│     │     │  │  │     ├─ function_definition.cpython-311.pyc
│     │     │  │  │     ├─ function_parameters.cpython-311.pyc
│     │     │  │  │     ├─ metadata.cpython-311.pyc
│     │     │  │  │     ├─ oauth_error_code.cpython-311.pyc
│     │     │  │  │     ├─ reasoning.cpython-311.pyc
│     │     │  │  │     ├─ reasoning_effort.cpython-311.pyc
│     │     │  │  │     ├─ responses_model.cpython-311.pyc
│     │     │  │  │     ├─ response_format_json_object.cpython-311.pyc
│     │     │  │  │     ├─ response_format_json_schema.cpython-311.pyc
│     │     │  │  │     ├─ response_format_text.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ skill.py
│     │     │  │  ├─ skills
│     │     │  │  │  ├─ deleted_skill_version.py
│     │     │  │  │  ├─ skill_version.py
│     │     │  │  │  ├─ skill_version_list.py
│     │     │  │  │  ├─ versions
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ version_create_params.py
│     │     │  │  │  ├─ version_list_params.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ deleted_skill_version.cpython-311.pyc
│     │     │  │  │     ├─ skill_version.cpython-311.pyc
│     │     │  │  │     ├─ skill_version_list.cpython-311.pyc
│     │     │  │  │     ├─ version_create_params.cpython-311.pyc
│     │     │  │  │     ├─ version_list_params.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ skill_create_params.py
│     │     │  │  ├─ skill_list.py
│     │     │  │  ├─ skill_list_params.py
│     │     │  │  ├─ skill_update_params.py
│     │     │  │  ├─ static_file_chunking_strategy.py
│     │     │  │  ├─ static_file_chunking_strategy_object.py
│     │     │  │  ├─ static_file_chunking_strategy_object_param.py
│     │     │  │  ├─ static_file_chunking_strategy_param.py
│     │     │  │  ├─ upload.py
│     │     │  │  ├─ uploads
│     │     │  │  │  ├─ part_create_params.py
│     │     │  │  │  ├─ upload_part.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ part_create_params.cpython-311.pyc
│     │     │  │  │     ├─ upload_part.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ upload_complete_params.py
│     │     │  │  ├─ upload_create_params.py
│     │     │  │  ├─ vector_store.py
│     │     │  │  ├─ vector_stores
│     │     │  │  │  ├─ file_batch_create_params.py
│     │     │  │  │  ├─ file_batch_list_files_params.py
│     │     │  │  │  ├─ file_content_response.py
│     │     │  │  │  ├─ file_create_params.py
│     │     │  │  │  ├─ file_list_params.py
│     │     │  │  │  ├─ file_update_params.py
│     │     │  │  │  ├─ vector_store_file.py
│     │     │  │  │  ├─ vector_store_file_batch.py
│     │     │  │  │  ├─ vector_store_file_deleted.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ file_batch_create_params.cpython-311.pyc
│     │     │  │  │     ├─ file_batch_list_files_params.cpython-311.pyc
│     │     │  │  │     ├─ file_content_response.cpython-311.pyc
│     │     │  │  │     ├─ file_create_params.cpython-311.pyc
│     │     │  │  │     ├─ file_list_params.cpython-311.pyc
│     │     │  │  │     ├─ file_update_params.cpython-311.pyc
│     │     │  │  │     ├─ vector_store_file.cpython-311.pyc
│     │     │  │  │     ├─ vector_store_file_batch.cpython-311.pyc
│     │     │  │  │     ├─ vector_store_file_deleted.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ vector_store_create_params.py
│     │     │  │  ├─ vector_store_deleted.py
│     │     │  │  ├─ vector_store_list_params.py
│     │     │  │  ├─ vector_store_search_params.py
│     │     │  │  ├─ vector_store_search_response.py
│     │     │  │  ├─ vector_store_update_params.py
│     │     │  │  ├─ video.py
│     │     │  │  ├─ video_create_character_params.py
│     │     │  │  ├─ video_create_character_response.py
│     │     │  │  ├─ video_create_error.py
│     │     │  │  ├─ video_create_params.py
│     │     │  │  ├─ video_delete_response.py
│     │     │  │  ├─ video_download_content_params.py
│     │     │  │  ├─ video_edit_params.py
│     │     │  │  ├─ video_extend_params.py
│     │     │  │  ├─ video_get_character_response.py
│     │     │  │  ├─ video_list_params.py
│     │     │  │  ├─ video_model.py
│     │     │  │  ├─ video_model_param.py
│     │     │  │  ├─ video_remix_params.py
│     │     │  │  ├─ video_seconds.py
│     │     │  │  ├─ video_size.py
│     │     │  │  ├─ webhooks
│     │     │  │  │  ├─ batch_cancelled_webhook_event.py
│     │     │  │  │  ├─ batch_completed_webhook_event.py
│     │     │  │  │  ├─ batch_expired_webhook_event.py
│     │     │  │  │  ├─ batch_failed_webhook_event.py
│     │     │  │  │  ├─ eval_run_canceled_webhook_event.py
│     │     │  │  │  ├─ eval_run_failed_webhook_event.py
│     │     │  │  │  ├─ eval_run_succeeded_webhook_event.py
│     │     │  │  │  ├─ fine_tuning_job_cancelled_webhook_event.py
│     │     │  │  │  ├─ fine_tuning_job_failed_webhook_event.py
│     │     │  │  │  ├─ fine_tuning_job_succeeded_webhook_event.py
│     │     │  │  │  ├─ realtime_call_incoming_webhook_event.py
│     │     │  │  │  ├─ response_cancelled_webhook_event.py
│     │     │  │  │  ├─ response_completed_webhook_event.py
│     │     │  │  │  ├─ response_failed_webhook_event.py
│     │     │  │  │  ├─ response_incomplete_webhook_event.py
│     │     │  │  │  ├─ unwrap_webhook_event.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ batch_cancelled_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ batch_completed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ batch_expired_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ batch_failed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ eval_run_canceled_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ eval_run_failed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ eval_run_succeeded_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_cancelled_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_failed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ fine_tuning_job_succeeded_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ realtime_call_incoming_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ response_cancelled_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ response_completed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ response_failed_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ response_incomplete_webhook_event.cpython-311.pyc
│     │     │  │  │     ├─ unwrap_webhook_event.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ websocket_connection_options.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ audio_model.cpython-311.pyc
│     │     │  │     ├─ audio_response_format.cpython-311.pyc
│     │     │  │     ├─ auto_file_chunking_strategy_param.cpython-311.pyc
│     │     │  │     ├─ batch.cpython-311.pyc
│     │     │  │     ├─ batch_create_params.cpython-311.pyc
│     │     │  │     ├─ batch_error.cpython-311.pyc
│     │     │  │     ├─ batch_list_params.cpython-311.pyc
│     │     │  │     ├─ batch_request_counts.cpython-311.pyc
│     │     │  │     ├─ batch_usage.cpython-311.pyc
│     │     │  │     ├─ chat_model.cpython-311.pyc
│     │     │  │     ├─ completion.cpython-311.pyc
│     │     │  │     ├─ completion_choice.cpython-311.pyc
│     │     │  │     ├─ completion_create_params.cpython-311.pyc
│     │     │  │     ├─ completion_usage.cpython-311.pyc
│     │     │  │     ├─ container_create_params.cpython-311.pyc
│     │     │  │     ├─ container_create_response.cpython-311.pyc
│     │     │  │     ├─ container_list_params.cpython-311.pyc
│     │     │  │     ├─ container_list_response.cpython-311.pyc
│     │     │  │     ├─ container_retrieve_response.cpython-311.pyc
│     │     │  │     ├─ create_embedding_response.cpython-311.pyc
│     │     │  │     ├─ deleted_skill.cpython-311.pyc
│     │     │  │     ├─ embedding.cpython-311.pyc
│     │     │  │     ├─ embedding_create_params.cpython-311.pyc
│     │     │  │     ├─ embedding_model.cpython-311.pyc
│     │     │  │     ├─ eval_create_params.cpython-311.pyc
│     │     │  │     ├─ eval_create_response.cpython-311.pyc
│     │     │  │     ├─ eval_custom_data_source_config.cpython-311.pyc
│     │     │  │     ├─ eval_delete_response.cpython-311.pyc
│     │     │  │     ├─ eval_list_params.cpython-311.pyc
│     │     │  │     ├─ eval_list_response.cpython-311.pyc
│     │     │  │     ├─ eval_retrieve_response.cpython-311.pyc
│     │     │  │     ├─ eval_stored_completions_data_source_config.cpython-311.pyc
│     │     │  │     ├─ eval_update_params.cpython-311.pyc
│     │     │  │     ├─ eval_update_response.cpython-311.pyc
│     │     │  │     ├─ file_chunking_strategy.cpython-311.pyc
│     │     │  │     ├─ file_chunking_strategy_param.cpython-311.pyc
│     │     │  │     ├─ file_content.cpython-311.pyc
│     │     │  │     ├─ file_create_params.cpython-311.pyc
│     │     │  │     ├─ file_deleted.cpython-311.pyc
│     │     │  │     ├─ file_list_params.cpython-311.pyc
│     │     │  │     ├─ file_object.cpython-311.pyc
│     │     │  │     ├─ file_purpose.cpython-311.pyc
│     │     │  │     ├─ image.cpython-311.pyc
│     │     │  │     ├─ images_response.cpython-311.pyc
│     │     │  │     ├─ image_create_variation_params.cpython-311.pyc
│     │     │  │     ├─ image_edit_completed_event.cpython-311.pyc
│     │     │  │     ├─ image_edit_params.cpython-311.pyc
│     │     │  │     ├─ image_edit_partial_image_event.cpython-311.pyc
│     │     │  │     ├─ image_edit_stream_event.cpython-311.pyc
│     │     │  │     ├─ image_generate_params.cpython-311.pyc
│     │     │  │     ├─ image_gen_completed_event.cpython-311.pyc
│     │     │  │     ├─ image_gen_partial_image_event.cpython-311.pyc
│     │     │  │     ├─ image_gen_stream_event.cpython-311.pyc
│     │     │  │     ├─ image_input_reference_param.cpython-311.pyc
│     │     │  │     ├─ image_model.cpython-311.pyc
│     │     │  │     ├─ model.cpython-311.pyc
│     │     │  │     ├─ model_deleted.cpython-311.pyc
│     │     │  │     ├─ moderation.cpython-311.pyc
│     │     │  │     ├─ moderation_create_params.cpython-311.pyc
│     │     │  │     ├─ moderation_create_response.cpython-311.pyc
│     │     │  │     ├─ moderation_image_url_input_param.cpython-311.pyc
│     │     │  │     ├─ moderation_model.cpython-311.pyc
│     │     │  │     ├─ moderation_multi_modal_input_param.cpython-311.pyc
│     │     │  │     ├─ moderation_text_input_param.cpython-311.pyc
│     │     │  │     ├─ other_file_chunking_strategy_object.cpython-311.pyc
│     │     │  │     ├─ skill.cpython-311.pyc
│     │     │  │     ├─ skill_create_params.cpython-311.pyc
│     │     │  │     ├─ skill_list.cpython-311.pyc
│     │     │  │     ├─ skill_list_params.cpython-311.pyc
│     │     │  │     ├─ skill_update_params.cpython-311.pyc
│     │     │  │     ├─ static_file_chunking_strategy.cpython-311.pyc
│     │     │  │     ├─ static_file_chunking_strategy_object.cpython-311.pyc
│     │     │  │     ├─ static_file_chunking_strategy_object_param.cpython-311.pyc
│     │     │  │     ├─ static_file_chunking_strategy_param.cpython-311.pyc
│     │     │  │     ├─ upload.cpython-311.pyc
│     │     │  │     ├─ upload_complete_params.cpython-311.pyc
│     │     │  │     ├─ upload_create_params.cpython-311.pyc
│     │     │  │     ├─ vector_store.cpython-311.pyc
│     │     │  │     ├─ vector_store_create_params.cpython-311.pyc
│     │     │  │     ├─ vector_store_deleted.cpython-311.pyc
│     │     │  │     ├─ vector_store_list_params.cpython-311.pyc
│     │     │  │     ├─ vector_store_search_params.cpython-311.pyc
│     │     │  │     ├─ vector_store_search_response.cpython-311.pyc
│     │     │  │     ├─ vector_store_update_params.cpython-311.pyc
│     │     │  │     ├─ video.cpython-311.pyc
│     │     │  │     ├─ video_create_character_params.cpython-311.pyc
│     │     │  │     ├─ video_create_character_response.cpython-311.pyc
│     │     │  │     ├─ video_create_error.cpython-311.pyc
│     │     │  │     ├─ video_create_params.cpython-311.pyc
│     │     │  │     ├─ video_delete_response.cpython-311.pyc
│     │     │  │     ├─ video_download_content_params.cpython-311.pyc
│     │     │  │     ├─ video_edit_params.cpython-311.pyc
│     │     │  │     ├─ video_extend_params.cpython-311.pyc
│     │     │  │     ├─ video_get_character_response.cpython-311.pyc
│     │     │  │     ├─ video_list_params.cpython-311.pyc
│     │     │  │     ├─ video_model.cpython-311.pyc
│     │     │  │     ├─ video_model_param.cpython-311.pyc
│     │     │  │     ├─ video_remix_params.cpython-311.pyc
│     │     │  │     ├─ video_seconds.cpython-311.pyc
│     │     │  │     ├─ video_size.cpython-311.pyc
│     │     │  │     ├─ websocket_connection_options.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ version.py
│     │     │  ├─ _base_client.py
│     │     │  ├─ _client.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _constants.py
│     │     │  ├─ _exceptions.py
│     │     │  ├─ _extras
│     │     │  │  ├─ numpy_proxy.py
│     │     │  │  ├─ pandas_proxy.py
│     │     │  │  ├─ sounddevice_proxy.py
│     │     │  │  ├─ _common.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ numpy_proxy.cpython-311.pyc
│     │     │  │     ├─ pandas_proxy.cpython-311.pyc
│     │     │  │     ├─ sounddevice_proxy.cpython-311.pyc
│     │     │  │     ├─ _common.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _files.py
│     │     │  ├─ _legacy_response.py
│     │     │  ├─ _models.py
│     │     │  ├─ _module_client.py
│     │     │  ├─ _qs.py
│     │     │  ├─ _resource.py
│     │     │  ├─ _response.py
│     │     │  ├─ _streaming.py
│     │     │  ├─ _types.py
│     │     │  ├─ _utils
│     │     │  │  ├─ _compat.py
│     │     │  │  ├─ _datetime_parse.py
│     │     │  │  ├─ _json.py
│     │     │  │  ├─ _logs.py
│     │     │  │  ├─ _path.py
│     │     │  │  ├─ _proxy.py
│     │     │  │  ├─ _reflection.py
│     │     │  │  ├─ _resources_proxy.py
│     │     │  │  ├─ _streams.py
│     │     │  │  ├─ _sync.py
│     │     │  │  ├─ _transform.py
│     │     │  │  ├─ _typing.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _compat.cpython-311.pyc
│     │     │  │     ├─ _datetime_parse.cpython-311.pyc
│     │     │  │     ├─ _json.cpython-311.pyc
│     │     │  │     ├─ _logs.cpython-311.pyc
│     │     │  │     ├─ _path.cpython-311.pyc
│     │     │  │     ├─ _proxy.cpython-311.pyc
│     │     │  │     ├─ _reflection.cpython-311.pyc
│     │     │  │     ├─ _resources_proxy.cpython-311.pyc
│     │     │  │     ├─ _streams.cpython-311.pyc
│     │     │  │     ├─ _sync.cpython-311.pyc
│     │     │  │     ├─ _transform.cpython-311.pyc
│     │     │  │     ├─ _typing.cpython-311.pyc
│     │     │  │     ├─ _utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ pagination.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ _base_client.cpython-311.pyc
│     │     │     ├─ _client.cpython-311.pyc
│     │     │     ├─ _compat.cpython-311.pyc
│     │     │     ├─ _constants.cpython-311.pyc
│     │     │     ├─ _exceptions.cpython-311.pyc
│     │     │     ├─ _files.cpython-311.pyc
│     │     │     ├─ _legacy_response.cpython-311.pyc
│     │     │     ├─ _models.cpython-311.pyc
│     │     │     ├─ _module_client.cpython-311.pyc
│     │     │     ├─ _qs.cpython-311.pyc
│     │     │     ├─ _resource.cpython-311.pyc
│     │     │     ├─ _response.cpython-311.pyc
│     │     │     ├─ _streaming.cpython-311.pyc
│     │     │     ├─ _types.cpython-311.pyc
│     │     │     ├─ _version.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ openai-2.31.0.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  └─ WHEEL
│     │     ├─ pip
│     │     │  ├─ py.typed
│     │     │  ├─ _internal
│     │     │  │  ├─ build_env.py
│     │     │  │  ├─ cache.py
│     │     │  │  ├─ cli
│     │     │  │  │  ├─ autocompletion.py
│     │     │  │  │  ├─ base_command.py
│     │     │  │  │  ├─ cmdoptions.py
│     │     │  │  │  ├─ command_context.py
│     │     │  │  │  ├─ main.py
│     │     │  │  │  ├─ main_parser.py
│     │     │  │  │  ├─ parser.py
│     │     │  │  │  ├─ progress_bars.py
│     │     │  │  │  ├─ req_command.py
│     │     │  │  │  ├─ spinners.py
│     │     │  │  │  ├─ status_codes.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ autocompletion.cpython-311.pyc
│     │     │  │  │     ├─ base_command.cpython-311.pyc
│     │     │  │  │     ├─ cmdoptions.cpython-311.pyc
│     │     │  │  │     ├─ command_context.cpython-311.pyc
│     │     │  │  │     ├─ main.cpython-311.pyc
│     │     │  │  │     ├─ main_parser.cpython-311.pyc
│     │     │  │  │     ├─ parser.cpython-311.pyc
│     │     │  │  │     ├─ progress_bars.cpython-311.pyc
│     │     │  │  │     ├─ req_command.cpython-311.pyc
│     │     │  │  │     ├─ spinners.cpython-311.pyc
│     │     │  │  │     ├─ status_codes.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ commands
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ completion.py
│     │     │  │  │  ├─ configuration.py
│     │     │  │  │  ├─ debug.py
│     │     │  │  │  ├─ download.py
│     │     │  │  │  ├─ freeze.py
│     │     │  │  │  ├─ hash.py
│     │     │  │  │  ├─ help.py
│     │     │  │  │  ├─ index.py
│     │     │  │  │  ├─ inspect.py
│     │     │  │  │  ├─ install.py
│     │     │  │  │  ├─ list.py
│     │     │  │  │  ├─ search.py
│     │     │  │  │  ├─ show.py
│     │     │  │  │  ├─ uninstall.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cache.cpython-311.pyc
│     │     │  │  │     ├─ check.cpython-311.pyc
│     │     │  │  │     ├─ completion.cpython-311.pyc
│     │     │  │  │     ├─ configuration.cpython-311.pyc
│     │     │  │  │     ├─ debug.cpython-311.pyc
│     │     │  │  │     ├─ download.cpython-311.pyc
│     │     │  │  │     ├─ freeze.cpython-311.pyc
│     │     │  │  │     ├─ hash.cpython-311.pyc
│     │     │  │  │     ├─ help.cpython-311.pyc
│     │     │  │  │     ├─ index.cpython-311.pyc
│     │     │  │  │     ├─ inspect.cpython-311.pyc
│     │     │  │  │     ├─ install.cpython-311.pyc
│     │     │  │  │     ├─ list.cpython-311.pyc
│     │     │  │  │     ├─ search.cpython-311.pyc
│     │     │  │  │     ├─ show.cpython-311.pyc
│     │     │  │  │     ├─ uninstall.cpython-311.pyc
│     │     │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ configuration.py
│     │     │  │  ├─ distributions
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ installed.py
│     │     │  │  │  ├─ sdist.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-311.pyc
│     │     │  │  │     ├─ installed.cpython-311.pyc
│     │     │  │  │     ├─ sdist.cpython-311.pyc
│     │     │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ exceptions.py
│     │     │  │  ├─ index
│     │     │  │  │  ├─ collector.py
│     │     │  │  │  ├─ package_finder.py
│     │     │  │  │  ├─ sources.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ collector.cpython-311.pyc
│     │     │  │  │     ├─ package_finder.cpython-311.pyc
│     │     │  │  │     ├─ sources.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ locations
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ _distutils.py
│     │     │  │  │  ├─ _sysconfig.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-311.pyc
│     │     │  │  │     ├─ _distutils.cpython-311.pyc
│     │     │  │  │     ├─ _sysconfig.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ main.py
│     │     │  │  ├─ metadata
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ importlib
│     │     │  │  │  │  ├─ _compat.py
│     │     │  │  │  │  ├─ _dists.py
│     │     │  │  │  │  ├─ _envs.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _compat.cpython-311.pyc
│     │     │  │  │  │     ├─ _dists.cpython-311.pyc
│     │     │  │  │  │     ├─ _envs.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ pkg_resources.py
│     │     │  │  │  ├─ _json.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-311.pyc
│     │     │  │  │     ├─ pkg_resources.cpython-311.pyc
│     │     │  │  │     ├─ _json.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ models
│     │     │  │  │  ├─ candidate.py
│     │     │  │  │  ├─ direct_url.py
│     │     │  │  │  ├─ format_control.py
│     │     │  │  │  ├─ index.py
│     │     │  │  │  ├─ installation_report.py
│     │     │  │  │  ├─ link.py
│     │     │  │  │  ├─ scheme.py
│     │     │  │  │  ├─ search_scope.py
│     │     │  │  │  ├─ selection_prefs.py
│     │     │  │  │  ├─ target_python.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ candidate.cpython-311.pyc
│     │     │  │  │     ├─ direct_url.cpython-311.pyc
│     │     │  │  │     ├─ format_control.cpython-311.pyc
│     │     │  │  │     ├─ index.cpython-311.pyc
│     │     │  │  │     ├─ installation_report.cpython-311.pyc
│     │     │  │  │     ├─ link.cpython-311.pyc
│     │     │  │  │     ├─ scheme.cpython-311.pyc
│     │     │  │  │     ├─ search_scope.cpython-311.pyc
│     │     │  │  │     ├─ selection_prefs.cpython-311.pyc
│     │     │  │  │     ├─ target_python.cpython-311.pyc
│     │     │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ network
│     │     │  │  │  ├─ auth.py
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ download.py
│     │     │  │  │  ├─ lazy_wheel.py
│     │     │  │  │  ├─ session.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ xmlrpc.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auth.cpython-311.pyc
│     │     │  │  │     ├─ cache.cpython-311.pyc
│     │     │  │  │     ├─ download.cpython-311.pyc
│     │     │  │  │     ├─ lazy_wheel.cpython-311.pyc
│     │     │  │  │     ├─ session.cpython-311.pyc
│     │     │  │  │     ├─ utils.cpython-311.pyc
│     │     │  │  │     ├─ xmlrpc.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ operations
│     │     │  │  │  ├─ build
│     │     │  │  │  │  ├─ build_tracker.py
│     │     │  │  │  │  ├─ metadata.py
│     │     │  │  │  │  ├─ metadata_editable.py
│     │     │  │  │  │  ├─ metadata_legacy.py
│     │     │  │  │  │  ├─ wheel.py
│     │     │  │  │  │  ├─ wheel_editable.py
│     │     │  │  │  │  ├─ wheel_legacy.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ build_tracker.cpython-311.pyc
│     │     │  │  │  │     ├─ metadata.cpython-311.pyc
│     │     │  │  │  │     ├─ metadata_editable.cpython-311.pyc
│     │     │  │  │  │     ├─ metadata_legacy.cpython-311.pyc
│     │     │  │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │  │     ├─ wheel_editable.cpython-311.pyc
│     │     │  │  │  │     ├─ wheel_legacy.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ freeze.py
│     │     │  │  │  ├─ install
│     │     │  │  │  │  ├─ editable_legacy.py
│     │     │  │  │  │  ├─ legacy.py
│     │     │  │  │  │  ├─ wheel.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ editable_legacy.cpython-311.pyc
│     │     │  │  │  │     ├─ legacy.cpython-311.pyc
│     │     │  │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ prepare.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ check.cpython-311.pyc
│     │     │  │  │     ├─ freeze.cpython-311.pyc
│     │     │  │  │     ├─ prepare.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pyproject.py
│     │     │  │  ├─ req
│     │     │  │  │  ├─ constructors.py
│     │     │  │  │  ├─ req_file.py
│     │     │  │  │  ├─ req_install.py
│     │     │  │  │  ├─ req_set.py
│     │     │  │  │  ├─ req_uninstall.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ constructors.cpython-311.pyc
│     │     │  │  │     ├─ req_file.cpython-311.pyc
│     │     │  │  │     ├─ req_install.cpython-311.pyc
│     │     │  │  │     ├─ req_set.cpython-311.pyc
│     │     │  │  │     ├─ req_uninstall.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ resolution
│     │     │  │  │  ├─ base.py
│     │     │  │  │  ├─ legacy
│     │     │  │  │  │  ├─ resolver.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ resolver.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ resolvelib
│     │     │  │  │  │  ├─ base.py
│     │     │  │  │  │  ├─ candidates.py
│     │     │  │  │  │  ├─ factory.py
│     │     │  │  │  │  ├─ found_candidates.py
│     │     │  │  │  │  ├─ provider.py
│     │     │  │  │  │  ├─ reporter.py
│     │     │  │  │  │  ├─ requirements.py
│     │     │  │  │  │  ├─ resolver.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ base.cpython-311.pyc
│     │     │  │  │  │     ├─ candidates.cpython-311.pyc
│     │     │  │  │  │     ├─ factory.cpython-311.pyc
│     │     │  │  │  │     ├─ found_candidates.cpython-311.pyc
│     │     │  │  │  │     ├─ provider.cpython-311.pyc
│     │     │  │  │  │     ├─ reporter.cpython-311.pyc
│     │     │  │  │  │     ├─ requirements.cpython-311.pyc
│     │     │  │  │  │     ├─ resolver.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ base.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ self_outdated_check.py
│     │     │  │  ├─ utils
│     │     │  │  │  ├─ appdirs.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ compatibility_tags.py
│     │     │  │  │  ├─ datetime.py
│     │     │  │  │  ├─ deprecation.py
│     │     │  │  │  ├─ direct_url_helpers.py
│     │     │  │  │  ├─ distutils_args.py
│     │     │  │  │  ├─ egg_link.py
│     │     │  │  │  ├─ encoding.py
│     │     │  │  │  ├─ entrypoints.py
│     │     │  │  │  ├─ filesystem.py
│     │     │  │  │  ├─ filetypes.py
│     │     │  │  │  ├─ glibc.py
│     │     │  │  │  ├─ hashes.py
│     │     │  │  │  ├─ inject_securetransport.py
│     │     │  │  │  ├─ logging.py
│     │     │  │  │  ├─ misc.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ packaging.py
│     │     │  │  │  ├─ setuptools_build.py
│     │     │  │  │  ├─ subprocess.py
│     │     │  │  │  ├─ temp_dir.py
│     │     │  │  │  ├─ unpacking.py
│     │     │  │  │  ├─ urls.py
│     │     │  │  │  ├─ virtualenv.py
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ _log.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ appdirs.cpython-311.pyc
│     │     │  │  │     ├─ compat.cpython-311.pyc
│     │     │  │  │     ├─ compatibility_tags.cpython-311.pyc
│     │     │  │  │     ├─ datetime.cpython-311.pyc
│     │     │  │  │     ├─ deprecation.cpython-311.pyc
│     │     │  │  │     ├─ direct_url_helpers.cpython-311.pyc
│     │     │  │  │     ├─ distutils_args.cpython-311.pyc
│     │     │  │  │     ├─ egg_link.cpython-311.pyc
│     │     │  │  │     ├─ encoding.cpython-311.pyc
│     │     │  │  │     ├─ entrypoints.cpython-311.pyc
│     │     │  │  │     ├─ filesystem.cpython-311.pyc
│     │     │  │  │     ├─ filetypes.cpython-311.pyc
│     │     │  │  │     ├─ glibc.cpython-311.pyc
│     │     │  │  │     ├─ hashes.cpython-311.pyc
│     │     │  │  │     ├─ inject_securetransport.cpython-311.pyc
│     │     │  │  │     ├─ logging.cpython-311.pyc
│     │     │  │  │     ├─ misc.cpython-311.pyc
│     │     │  │  │     ├─ models.cpython-311.pyc
│     │     │  │  │     ├─ packaging.cpython-311.pyc
│     │     │  │  │     ├─ setuptools_build.cpython-311.pyc
│     │     │  │  │     ├─ subprocess.cpython-311.pyc
│     │     │  │  │     ├─ temp_dir.cpython-311.pyc
│     │     │  │  │     ├─ unpacking.cpython-311.pyc
│     │     │  │  │     ├─ urls.cpython-311.pyc
│     │     │  │  │     ├─ virtualenv.cpython-311.pyc
│     │     │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │     ├─ _log.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ vcs
│     │     │  │  │  ├─ bazaar.py
│     │     │  │  │  ├─ git.py
│     │     │  │  │  ├─ mercurial.py
│     │     │  │  │  ├─ subversion.py
│     │     │  │  │  ├─ versioncontrol.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ bazaar.cpython-311.pyc
│     │     │  │  │     ├─ git.cpython-311.pyc
│     │     │  │  │     ├─ mercurial.cpython-311.pyc
│     │     │  │  │     ├─ subversion.cpython-311.pyc
│     │     │  │  │     ├─ versioncontrol.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ wheel_builder.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ build_env.cpython-311.pyc
│     │     │  │     ├─ cache.cpython-311.pyc
│     │     │  │     ├─ configuration.cpython-311.pyc
│     │     │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │     ├─ main.cpython-311.pyc
│     │     │  │     ├─ pyproject.cpython-311.pyc
│     │     │  │     ├─ self_outdated_check.cpython-311.pyc
│     │     │  │     ├─ wheel_builder.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _vendor
│     │     │  │  ├─ cachecontrol
│     │     │  │  │  ├─ adapter.py
│     │     │  │  │  ├─ cache.py
│     │     │  │  │  ├─ caches
│     │     │  │  │  │  ├─ file_cache.py
│     │     │  │  │  │  ├─ redis_cache.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ file_cache.cpython-311.pyc
│     │     │  │  │  │     ├─ redis_cache.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ controller.py
│     │     │  │  │  ├─ filewrapper.py
│     │     │  │  │  ├─ heuristics.py
│     │     │  │  │  ├─ serialize.py
│     │     │  │  │  ├─ wrapper.py
│     │     │  │  │  ├─ _cmd.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ adapter.cpython-311.pyc
│     │     │  │  │     ├─ cache.cpython-311.pyc
│     │     │  │  │     ├─ compat.cpython-311.pyc
│     │     │  │  │     ├─ controller.cpython-311.pyc
│     │     │  │  │     ├─ filewrapper.cpython-311.pyc
│     │     │  │  │     ├─ heuristics.cpython-311.pyc
│     │     │  │  │     ├─ serialize.cpython-311.pyc
│     │     │  │  │     ├─ wrapper.cpython-311.pyc
│     │     │  │  │     ├─ _cmd.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ certifi
│     │     │  │  │  ├─ cacert.pem
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ core.cpython-311.pyc
│     │     │  │  │     ├─ __init__.cpython-311.pyc
│     │     │  │  │     └─ __main__.cpython-311.pyc
│     │     │  │  ├─ chardet
│     │     │  │  │  ├─ big5freq.py
│     │     │  │  │  ├─ big5prober.py
│     │     │  │  │  ├─ chardistribution.py
│     │     │  │  │  ├─ charsetgroupprober.py
│     │     │  │  │  ├─ charsetprober.py
│     │     │  │  │  ├─ cli
│     │     │  │  │  │  ├─ chardetect.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ chardetect.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ codingstatemachine.py
│     │     │  │  │  ├─ cp949prober.py
│     │     │  │  │  ├─ enums.py
│     │     │  │  │  ├─ escprober.py
│     │     │  │  │  ├─ escsm.py
│     │     │  │  │  ├─ eucjpprober.py
│     │     │  │  │  ├─ euckrfreq.py
│     │     │  │  │  ├─ euckrprober.py
│     │     │  │  │  ├─ euctwfreq.py
│     │     │  │  │  ├─ euctwprober.py
│     │     │  │  │  ├─ gb2312freq.py
│     │     │  │  │  ├─ gb2312prober.py
│     │     │  │  │  ├─ hebrewprober.py
│     │     │  │  │  ├─ jisfreq.py
│     │     │  │  │  ├─ johabfreq.py
│     │     │  │  │  ├─ johabprober.py
│     │     │  │  │  ├─ jpcntx.py
│     │     │  │  │  ├─ langbulgarianmodel.py
│     │     │  │  │  ├─ langgreekmodel.py
│     │     │  │  │  ├─ langhebrewmodel.py
│     │     │  │  │  ├─ langhungarianmodel.py
│     │     │  │  │  ├─ langrussianmodel.py
│     │     │  │  │  ├─ langthaimodel.py
│     │     │  │  │  ├─ langturkishmodel.py
│     │     │  │  │  ├─ latin1prober.py
│     │     │  │  │  ├─ mbcharsetprober.py
│     │     │  │  │  ├─ mbcsgroupprober.py
│     │     │  │  │  ├─ mbcssm.py
│     │     │  │  │  ├─ metadata
│     │     │  │  │  │  ├─ languages.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ languages.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ sbcharsetprober.py
│     │     │  │  │  ├─ sbcsgroupprober.py
│     │     │  │  │  ├─ sjisprober.py
│     │     │  │  │  ├─ universaldetector.py
│     │     │  │  │  ├─ utf1632prober.py
│     │     │  │  │  ├─ utf8prober.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ big5freq.cpython-311.pyc
│     │     │  │  │     ├─ big5prober.cpython-311.pyc
│     │     │  │  │     ├─ chardistribution.cpython-311.pyc
│     │     │  │  │     ├─ charsetgroupprober.cpython-311.pyc
│     │     │  │  │     ├─ charsetprober.cpython-311.pyc
│     │     │  │  │     ├─ codingstatemachine.cpython-311.pyc
│     │     │  │  │     ├─ cp949prober.cpython-311.pyc
│     │     │  │  │     ├─ enums.cpython-311.pyc
│     │     │  │  │     ├─ escprober.cpython-311.pyc
│     │     │  │  │     ├─ escsm.cpython-311.pyc
│     │     │  │  │     ├─ eucjpprober.cpython-311.pyc
│     │     │  │  │     ├─ euckrfreq.cpython-311.pyc
│     │     │  │  │     ├─ euckrprober.cpython-311.pyc
│     │     │  │  │     ├─ euctwfreq.cpython-311.pyc
│     │     │  │  │     ├─ euctwprober.cpython-311.pyc
│     │     │  │  │     ├─ gb2312freq.cpython-311.pyc
│     │     │  │  │     ├─ gb2312prober.cpython-311.pyc
│     │     │  │  │     ├─ hebrewprober.cpython-311.pyc
│     │     │  │  │     ├─ jisfreq.cpython-311.pyc
│     │     │  │  │     ├─ johabfreq.cpython-311.pyc
│     │     │  │  │     ├─ johabprober.cpython-311.pyc
│     │     │  │  │     ├─ jpcntx.cpython-311.pyc
│     │     │  │  │     ├─ langbulgarianmodel.cpython-311.pyc
│     │     │  │  │     ├─ langgreekmodel.cpython-311.pyc
│     │     │  │  │     ├─ langhebrewmodel.cpython-311.pyc
│     │     │  │  │     ├─ langhungarianmodel.cpython-311.pyc
│     │     │  │  │     ├─ langrussianmodel.cpython-311.pyc
│     │     │  │  │     ├─ langthaimodel.cpython-311.pyc
│     │     │  │  │     ├─ langturkishmodel.cpython-311.pyc
│     │     │  │  │     ├─ latin1prober.cpython-311.pyc
│     │     │  │  │     ├─ mbcharsetprober.cpython-311.pyc
│     │     │  │  │     ├─ mbcsgroupprober.cpython-311.pyc
│     │     │  │  │     ├─ mbcssm.cpython-311.pyc
│     │     │  │  │     ├─ sbcharsetprober.cpython-311.pyc
│     │     │  │  │     ├─ sbcsgroupprober.cpython-311.pyc
│     │     │  │  │     ├─ sjisprober.cpython-311.pyc
│     │     │  │  │     ├─ universaldetector.cpython-311.pyc
│     │     │  │  │     ├─ utf1632prober.cpython-311.pyc
│     │     │  │  │     ├─ utf8prober.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ colorama
│     │     │  │  │  ├─ ansi.py
│     │     │  │  │  ├─ ansitowin32.py
│     │     │  │  │  ├─ initialise.py
│     │     │  │  │  ├─ win32.py
│     │     │  │  │  ├─ winterm.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ ansi.cpython-311.pyc
│     │     │  │  │     ├─ ansitowin32.cpython-311.pyc
│     │     │  │  │     ├─ initialise.cpython-311.pyc
│     │     │  │  │     ├─ win32.cpython-311.pyc
│     │     │  │  │     ├─ winterm.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ distlib
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ database.py
│     │     │  │  │  ├─ index.py
│     │     │  │  │  ├─ locators.py
│     │     │  │  │  ├─ manifest.py
│     │     │  │  │  ├─ markers.py
│     │     │  │  │  ├─ metadata.py
│     │     │  │  │  ├─ resources.py
│     │     │  │  │  ├─ scripts.py
│     │     │  │  │  ├─ t32.exe
│     │     │  │  │  ├─ t64-arm.exe
│     │     │  │  │  ├─ t64.exe
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ w32.exe
│     │     │  │  │  ├─ w64-arm.exe
│     │     │  │  │  ├─ w64.exe
│     │     │  │  │  ├─ wheel.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ compat.cpython-311.pyc
│     │     │  │  │     ├─ database.cpython-311.pyc
│     │     │  │  │     ├─ index.cpython-311.pyc
│     │     │  │  │     ├─ locators.cpython-311.pyc
│     │     │  │  │     ├─ manifest.cpython-311.pyc
│     │     │  │  │     ├─ markers.cpython-311.pyc
│     │     │  │  │     ├─ metadata.cpython-311.pyc
│     │     │  │  │     ├─ resources.cpython-311.pyc
│     │     │  │  │     ├─ scripts.cpython-311.pyc
│     │     │  │  │     ├─ util.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     ├─ wheel.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ distro
│     │     │  │  │  ├─ distro.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ distro.cpython-311.pyc
│     │     │  │  │     ├─ __init__.cpython-311.pyc
│     │     │  │  │     └─ __main__.cpython-311.pyc
│     │     │  │  ├─ idna
│     │     │  │  │  ├─ codec.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ idnadata.py
│     │     │  │  │  ├─ intranges.py
│     │     │  │  │  ├─ package_data.py
│     │     │  │  │  ├─ uts46data.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ codec.cpython-311.pyc
│     │     │  │  │     ├─ compat.cpython-311.pyc
│     │     │  │  │     ├─ core.cpython-311.pyc
│     │     │  │  │     ├─ idnadata.cpython-311.pyc
│     │     │  │  │     ├─ intranges.cpython-311.pyc
│     │     │  │  │     ├─ package_data.cpython-311.pyc
│     │     │  │  │     ├─ uts46data.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ msgpack
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ ext.py
│     │     │  │  │  ├─ fallback.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │  │     ├─ ext.cpython-311.pyc
│     │     │  │  │     ├─ fallback.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ packaging
│     │     │  │  │  ├─ markers.py
│     │     │  │  │  ├─ requirements.py
│     │     │  │  │  ├─ specifiers.py
│     │     │  │  │  ├─ tags.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ _manylinux.py
│     │     │  │  │  ├─ _musllinux.py
│     │     │  │  │  ├─ _structures.py
│     │     │  │  │  ├─ __about__.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ markers.cpython-311.pyc
│     │     │  │  │     ├─ requirements.cpython-311.pyc
│     │     │  │  │     ├─ specifiers.cpython-311.pyc
│     │     │  │  │     ├─ tags.cpython-311.pyc
│     │     │  │  │     ├─ utils.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     ├─ _manylinux.cpython-311.pyc
│     │     │  │  │     ├─ _musllinux.cpython-311.pyc
│     │     │  │  │     ├─ _structures.cpython-311.pyc
│     │     │  │  │     ├─ __about__.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pep517
│     │     │  │  │  ├─ build.py
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ colorlog.py
│     │     │  │  │  ├─ dirtools.py
│     │     │  │  │  ├─ envbuild.py
│     │     │  │  │  ├─ in_process
│     │     │  │  │  │  ├─ _in_process.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ _in_process.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ meta.py
│     │     │  │  │  ├─ wrappers.py
│     │     │  │  │  ├─ _compat.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ build.cpython-311.pyc
│     │     │  │  │     ├─ check.cpython-311.pyc
│     │     │  │  │     ├─ colorlog.cpython-311.pyc
│     │     │  │  │     ├─ dirtools.cpython-311.pyc
│     │     │  │  │     ├─ envbuild.cpython-311.pyc
│     │     │  │  │     ├─ meta.cpython-311.pyc
│     │     │  │  │     ├─ wrappers.cpython-311.pyc
│     │     │  │  │     ├─ _compat.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pkg_resources
│     │     │  │  │  ├─ py31compat.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ py31compat.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ platformdirs
│     │     │  │  │  ├─ android.py
│     │     │  │  │  ├─ api.py
│     │     │  │  │  ├─ macos.py
│     │     │  │  │  ├─ unix.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ windows.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ android.cpython-311.pyc
│     │     │  │  │     ├─ api.cpython-311.pyc
│     │     │  │  │     ├─ macos.cpython-311.pyc
│     │     │  │  │     ├─ unix.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     ├─ windows.cpython-311.pyc
│     │     │  │  │     ├─ __init__.cpython-311.pyc
│     │     │  │  │     └─ __main__.cpython-311.pyc
│     │     │  │  ├─ pygments
│     │     │  │  │  ├─ cmdline.py
│     │     │  │  │  ├─ console.py
│     │     │  │  │  ├─ filter.py
│     │     │  │  │  ├─ filters
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ formatter.py
│     │     │  │  │  ├─ formatters
│     │     │  │  │  │  ├─ bbcode.py
│     │     │  │  │  │  ├─ groff.py
│     │     │  │  │  │  ├─ html.py
│     │     │  │  │  │  ├─ img.py
│     │     │  │  │  │  ├─ irc.py
│     │     │  │  │  │  ├─ latex.py
│     │     │  │  │  │  ├─ other.py
│     │     │  │  │  │  ├─ pangomarkup.py
│     │     │  │  │  │  ├─ rtf.py
│     │     │  │  │  │  ├─ svg.py
│     │     │  │  │  │  ├─ terminal.py
│     │     │  │  │  │  ├─ terminal256.py
│     │     │  │  │  │  ├─ _mapping.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ bbcode.cpython-311.pyc
│     │     │  │  │  │     ├─ groff.cpython-311.pyc
│     │     │  │  │  │     ├─ html.cpython-311.pyc
│     │     │  │  │  │     ├─ img.cpython-311.pyc
│     │     │  │  │  │     ├─ irc.cpython-311.pyc
│     │     │  │  │  │     ├─ latex.cpython-311.pyc
│     │     │  │  │  │     ├─ other.cpython-311.pyc
│     │     │  │  │  │     ├─ pangomarkup.cpython-311.pyc
│     │     │  │  │  │     ├─ rtf.cpython-311.pyc
│     │     │  │  │  │     ├─ svg.cpython-311.pyc
│     │     │  │  │  │     ├─ terminal.cpython-311.pyc
│     │     │  │  │  │     ├─ terminal256.cpython-311.pyc
│     │     │  │  │  │     ├─ _mapping.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ lexer.py
│     │     │  │  │  ├─ lexers
│     │     │  │  │  │  ├─ python.py
│     │     │  │  │  │  ├─ _mapping.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ python.cpython-311.pyc
│     │     │  │  │  │     ├─ _mapping.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ modeline.py
│     │     │  │  │  ├─ plugin.py
│     │     │  │  │  ├─ regexopt.py
│     │     │  │  │  ├─ scanner.py
│     │     │  │  │  ├─ sphinxext.py
│     │     │  │  │  ├─ style.py
│     │     │  │  │  ├─ styles
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ token.py
│     │     │  │  │  ├─ unistring.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ cmdline.cpython-311.pyc
│     │     │  │  │     ├─ console.cpython-311.pyc
│     │     │  │  │     ├─ filter.cpython-311.pyc
│     │     │  │  │     ├─ formatter.cpython-311.pyc
│     │     │  │  │     ├─ lexer.cpython-311.pyc
│     │     │  │  │     ├─ modeline.cpython-311.pyc
│     │     │  │  │     ├─ plugin.cpython-311.pyc
│     │     │  │  │     ├─ regexopt.cpython-311.pyc
│     │     │  │  │     ├─ scanner.cpython-311.pyc
│     │     │  │  │     ├─ sphinxext.cpython-311.pyc
│     │     │  │  │     ├─ style.cpython-311.pyc
│     │     │  │  │     ├─ token.cpython-311.pyc
│     │     │  │  │     ├─ unistring.cpython-311.pyc
│     │     │  │  │     ├─ util.cpython-311.pyc
│     │     │  │  │     ├─ __init__.cpython-311.pyc
│     │     │  │  │     └─ __main__.cpython-311.pyc
│     │     │  │  ├─ pyparsing
│     │     │  │  │  ├─ actions.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ diagram
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ helpers.py
│     │     │  │  │  ├─ results.py
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ unicode.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ actions.cpython-311.pyc
│     │     │  │  │     ├─ common.cpython-311.pyc
│     │     │  │  │     ├─ core.cpython-311.pyc
│     │     │  │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │  │     ├─ helpers.cpython-311.pyc
│     │     │  │  │     ├─ results.cpython-311.pyc
│     │     │  │  │     ├─ testing.cpython-311.pyc
│     │     │  │  │     ├─ unicode.cpython-311.pyc
│     │     │  │  │     ├─ util.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ requests
│     │     │  │  │  ├─ adapters.py
│     │     │  │  │  ├─ api.py
│     │     │  │  │  ├─ auth.py
│     │     │  │  │  ├─ certs.py
│     │     │  │  │  ├─ compat.py
│     │     │  │  │  ├─ cookies.py
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ help.py
│     │     │  │  │  ├─ hooks.py
│     │     │  │  │  ├─ models.py
│     │     │  │  │  ├─ packages.py
│     │     │  │  │  ├─ sessions.py
│     │     │  │  │  ├─ status_codes.py
│     │     │  │  │  ├─ structures.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ _internal_utils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __pycache__
│     │     │  │  │  │  ├─ adapters.cpython-311.pyc
│     │     │  │  │  │  ├─ api.cpython-311.pyc
│     │     │  │  │  │  ├─ auth.cpython-311.pyc
│     │     │  │  │  │  ├─ certs.cpython-311.pyc
│     │     │  │  │  │  ├─ compat.cpython-311.pyc
│     │     │  │  │  │  ├─ cookies.cpython-311.pyc
│     │     │  │  │  │  ├─ exceptions.cpython-311.pyc
│     │     │  │  │  │  ├─ help.cpython-311.pyc
│     │     │  │  │  │  ├─ hooks.cpython-311.pyc
│     │     │  │  │  │  ├─ models.cpython-311.pyc
│     │     │  │  │  │  ├─ packages.cpython-311.pyc
│     │     │  │  │  │  ├─ sessions.cpython-311.pyc
│     │     │  │  │  │  ├─ status_codes.cpython-311.pyc
│     │     │  │  │  │  ├─ structures.cpython-311.pyc
│     │     │  │  │  │  ├─ utils.cpython-311.pyc
│     │     │  │  │  │  ├─ _internal_utils.cpython-311.pyc
│     │     │  │  │  │  ├─ __init__.cpython-311.pyc
│     │     │  │  │  │  └─ __version__.cpython-311.pyc
│     │     │  │  │  └─ __version__.py
│     │     │  │  ├─ resolvelib
│     │     │  │  │  ├─ compat
│     │     │  │  │  │  ├─ collections_abc.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ collections_abc.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ providers.py
│     │     │  │  │  ├─ reporters.py
│     │     │  │  │  ├─ resolvers.py
│     │     │  │  │  ├─ structs.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ providers.cpython-311.pyc
│     │     │  │  │     ├─ reporters.cpython-311.pyc
│     │     │  │  │     ├─ resolvers.cpython-311.pyc
│     │     │  │  │     ├─ structs.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ rich
│     │     │  │  │  ├─ abc.py
│     │     │  │  │  ├─ align.py
│     │     │  │  │  ├─ ansi.py
│     │     │  │  │  ├─ bar.py
│     │     │  │  │  ├─ box.py
│     │     │  │  │  ├─ cells.py
│     │     │  │  │  ├─ color.py
│     │     │  │  │  ├─ color_triplet.py
│     │     │  │  │  ├─ columns.py
│     │     │  │  │  ├─ console.py
│     │     │  │  │  ├─ constrain.py
│     │     │  │  │  ├─ containers.py
│     │     │  │  │  ├─ control.py
│     │     │  │  │  ├─ default_styles.py
│     │     │  │  │  ├─ diagnose.py
│     │     │  │  │  ├─ emoji.py
│     │     │  │  │  ├─ errors.py
│     │     │  │  │  ├─ filesize.py
│     │     │  │  │  ├─ file_proxy.py
│     │     │  │  │  ├─ highlighter.py
│     │     │  │  │  ├─ json.py
│     │     │  │  │  ├─ jupyter.py
│     │     │  │  │  ├─ layout.py
│     │     │  │  │  ├─ live.py
│     │     │  │  │  ├─ live_render.py
│     │     │  │  │  ├─ logging.py
│     │     │  │  │  ├─ markup.py
│     │     │  │  │  ├─ measure.py
│     │     │  │  │  ├─ padding.py
│     │     │  │  │  ├─ pager.py
│     │     │  │  │  ├─ palette.py
│     │     │  │  │  ├─ panel.py
│     │     │  │  │  ├─ pretty.py
│     │     │  │  │  ├─ progress.py
│     │     │  │  │  ├─ progress_bar.py
│     │     │  │  │  ├─ prompt.py
│     │     │  │  │  ├─ protocol.py
│     │     │  │  │  ├─ region.py
│     │     │  │  │  ├─ repr.py
│     │     │  │  │  ├─ rule.py
│     │     │  │  │  ├─ scope.py
│     │     │  │  │  ├─ screen.py
│     │     │  │  │  ├─ segment.py
│     │     │  │  │  ├─ spinner.py
│     │     │  │  │  ├─ status.py
│     │     │  │  │  ├─ style.py
│     │     │  │  │  ├─ styled.py
│     │     │  │  │  ├─ syntax.py
│     │     │  │  │  ├─ table.py
│     │     │  │  │  ├─ terminal_theme.py
│     │     │  │  │  ├─ text.py
│     │     │  │  │  ├─ theme.py
│     │     │  │  │  ├─ themes.py
│     │     │  │  │  ├─ traceback.py
│     │     │  │  │  ├─ tree.py
│     │     │  │  │  ├─ _cell_widths.py
│     │     │  │  │  ├─ _emoji_codes.py
│     │     │  │  │  ├─ _emoji_replace.py
│     │     │  │  │  ├─ _export_format.py
│     │     │  │  │  ├─ _extension.py
│     │     │  │  │  ├─ _inspect.py
│     │     │  │  │  ├─ _log_render.py
│     │     │  │  │  ├─ _loop.py
│     │     │  │  │  ├─ _palettes.py
│     │     │  │  │  ├─ _pick.py
│     │     │  │  │  ├─ _ratio.py
│     │     │  │  │  ├─ _spinners.py
│     │     │  │  │  ├─ _stack.py
│     │     │  │  │  ├─ _timer.py
│     │     │  │  │  ├─ _win32_console.py
│     │     │  │  │  ├─ _windows.py
│     │     │  │  │  ├─ _windows_renderer.py
│     │     │  │  │  ├─ _wrap.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  ├─ __main__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ abc.cpython-311.pyc
│     │     │  │  │     ├─ align.cpython-311.pyc
│     │     │  │  │     ├─ ansi.cpython-311.pyc
│     │     │  │  │     ├─ bar.cpython-311.pyc
│     │     │  │  │     ├─ box.cpython-311.pyc
│     │     │  │  │     ├─ cells.cpython-311.pyc
│     │     │  │  │     ├─ color.cpython-311.pyc
│     │     │  │  │     ├─ color_triplet.cpython-311.pyc
│     │     │  │  │     ├─ columns.cpython-311.pyc
│     │     │  │  │     ├─ console.cpython-311.pyc
│     │     │  │  │     ├─ constrain.cpython-311.pyc
│     │     │  │  │     ├─ containers.cpython-311.pyc
│     │     │  │  │     ├─ control.cpython-311.pyc
│     │     │  │  │     ├─ default_styles.cpython-311.pyc
│     │     │  │  │     ├─ diagnose.cpython-311.pyc
│     │     │  │  │     ├─ emoji.cpython-311.pyc
│     │     │  │  │     ├─ errors.cpython-311.pyc
│     │     │  │  │     ├─ filesize.cpython-311.pyc
│     │     │  │  │     ├─ file_proxy.cpython-311.pyc
│     │     │  │  │     ├─ highlighter.cpython-311.pyc
│     │     │  │  │     ├─ json.cpython-311.pyc
│     │     │  │  │     ├─ jupyter.cpython-311.pyc
│     │     │  │  │     ├─ layout.cpython-311.pyc
│     │     │  │  │     ├─ live.cpython-311.pyc
│     │     │  │  │     ├─ live_render.cpython-311.pyc
│     │     │  │  │     ├─ logging.cpython-311.pyc
│     │     │  │  │     ├─ markup.cpython-311.pyc
│     │     │  │  │     ├─ measure.cpython-311.pyc
│     │     │  │  │     ├─ padding.cpython-311.pyc
│     │     │  │  │     ├─ pager.cpython-311.pyc
│     │     │  │  │     ├─ palette.cpython-311.pyc
│     │     │  │  │     ├─ panel.cpython-311.pyc
│     │     │  │  │     ├─ pretty.cpython-311.pyc
│     │     │  │  │     ├─ progress.cpython-311.pyc
│     │     │  │  │     ├─ progress_bar.cpython-311.pyc
│     │     │  │  │     ├─ prompt.cpython-311.pyc
│     │     │  │  │     ├─ protocol.cpython-311.pyc
│     │     │  │  │     ├─ region.cpython-311.pyc
│     │     │  │  │     ├─ repr.cpython-311.pyc
│     │     │  │  │     ├─ rule.cpython-311.pyc
│     │     │  │  │     ├─ scope.cpython-311.pyc
│     │     │  │  │     ├─ screen.cpython-311.pyc
│     │     │  │  │     ├─ segment.cpython-311.pyc
│     │     │  │  │     ├─ spinner.cpython-311.pyc
│     │     │  │  │     ├─ status.cpython-311.pyc
│     │     │  │  │     ├─ style.cpython-311.pyc
│     │     │  │  │     ├─ styled.cpython-311.pyc
│     │     │  │  │     ├─ syntax.cpython-311.pyc
│     │     │  │  │     ├─ table.cpython-311.pyc
│     │     │  │  │     ├─ terminal_theme.cpython-311.pyc
│     │     │  │  │     ├─ text.cpython-311.pyc
│     │     │  │  │     ├─ theme.cpython-311.pyc
│     │     │  │  │     ├─ themes.cpython-311.pyc
│     │     │  │  │     ├─ traceback.cpython-311.pyc
│     │     │  │  │     ├─ tree.cpython-311.pyc
│     │     │  │  │     ├─ _cell_widths.cpython-311.pyc
│     │     │  │  │     ├─ _emoji_codes.cpython-311.pyc
│     │     │  │  │     ├─ _emoji_replace.cpython-311.pyc
│     │     │  │  │     ├─ _export_format.cpython-311.pyc
│     │     │  │  │     ├─ _extension.cpython-311.pyc
│     │     │  │  │     ├─ _inspect.cpython-311.pyc
│     │     │  │  │     ├─ _log_render.cpython-311.pyc
│     │     │  │  │     ├─ _loop.cpython-311.pyc
│     │     │  │  │     ├─ _palettes.cpython-311.pyc
│     │     │  │  │     ├─ _pick.cpython-311.pyc
│     │     │  │  │     ├─ _ratio.cpython-311.pyc
│     │     │  │  │     ├─ _spinners.cpython-311.pyc
│     │     │  │  │     ├─ _stack.cpython-311.pyc
│     │     │  │  │     ├─ _timer.cpython-311.pyc
│     │     │  │  │     ├─ _win32_console.cpython-311.pyc
│     │     │  │  │     ├─ _windows.cpython-311.pyc
│     │     │  │  │     ├─ _windows_renderer.cpython-311.pyc
│     │     │  │  │     ├─ _wrap.cpython-311.pyc
│     │     │  │  │     ├─ __init__.cpython-311.pyc
│     │     │  │  │     └─ __main__.cpython-311.pyc
│     │     │  │  ├─ six.py
│     │     │  │  ├─ tenacity
│     │     │  │  │  ├─ after.py
│     │     │  │  │  ├─ before.py
│     │     │  │  │  ├─ before_sleep.py
│     │     │  │  │  ├─ nap.py
│     │     │  │  │  ├─ retry.py
│     │     │  │  │  ├─ stop.py
│     │     │  │  │  ├─ tornadoweb.py
│     │     │  │  │  ├─ wait.py
│     │     │  │  │  ├─ _asyncio.py
│     │     │  │  │  ├─ _utils.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ after.cpython-311.pyc
│     │     │  │  │     ├─ before.cpython-311.pyc
│     │     │  │  │     ├─ before_sleep.cpython-311.pyc
│     │     │  │  │     ├─ nap.cpython-311.pyc
│     │     │  │  │     ├─ retry.cpython-311.pyc
│     │     │  │  │     ├─ stop.cpython-311.pyc
│     │     │  │  │     ├─ tornadoweb.cpython-311.pyc
│     │     │  │  │     ├─ wait.cpython-311.pyc
│     │     │  │  │     ├─ _asyncio.cpython-311.pyc
│     │     │  │  │     ├─ _utils.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ tomli
│     │     │  │  │  ├─ _parser.py
│     │     │  │  │  ├─ _re.py
│     │     │  │  │  ├─ _types.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _parser.cpython-311.pyc
│     │     │  │  │     ├─ _re.cpython-311.pyc
│     │     │  │  │     ├─ _types.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ typing_extensions.py
│     │     │  │  ├─ urllib3
│     │     │  │  │  ├─ connection.py
│     │     │  │  │  ├─ connectionpool.py
│     │     │  │  │  ├─ contrib
│     │     │  │  │  │  ├─ appengine.py
│     │     │  │  │  │  ├─ ntlmpool.py
│     │     │  │  │  │  ├─ pyopenssl.py
│     │     │  │  │  │  ├─ securetransport.py
│     │     │  │  │  │  ├─ socks.py
│     │     │  │  │  │  ├─ _appengine_environ.py
│     │     │  │  │  │  ├─ _securetransport
│     │     │  │  │  │  │  ├─ bindings.py
│     │     │  │  │  │  │  ├─ low_level.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ bindings.cpython-311.pyc
│     │     │  │  │  │  │     ├─ low_level.cpython-311.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ appengine.cpython-311.pyc
│     │     │  │  │  │     ├─ ntlmpool.cpython-311.pyc
│     │     │  │  │  │     ├─ pyopenssl.cpython-311.pyc
│     │     │  │  │  │     ├─ securetransport.cpython-311.pyc
│     │     │  │  │  │     ├─ socks.cpython-311.pyc
│     │     │  │  │  │     ├─ _appengine_environ.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ fields.py
│     │     │  │  │  ├─ filepost.py
│     │     │  │  │  ├─ packages
│     │     │  │  │  │  ├─ backports
│     │     │  │  │  │  │  ├─ makefile.py
│     │     │  │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  │  └─ __pycache__
│     │     │  │  │  │  │     ├─ makefile.cpython-311.pyc
│     │     │  │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  │  ├─ six.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ six.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ poolmanager.py
│     │     │  │  │  ├─ request.py
│     │     │  │  │  ├─ response.py
│     │     │  │  │  ├─ util
│     │     │  │  │  │  ├─ connection.py
│     │     │  │  │  │  ├─ proxy.py
│     │     │  │  │  │  ├─ queue.py
│     │     │  │  │  │  ├─ request.py
│     │     │  │  │  │  ├─ response.py
│     │     │  │  │  │  ├─ retry.py
│     │     │  │  │  │  ├─ ssltransport.py
│     │     │  │  │  │  ├─ ssl_.py
│     │     │  │  │  │  ├─ ssl_match_hostname.py
│     │     │  │  │  │  ├─ timeout.py
│     │     │  │  │  │  ├─ url.py
│     │     │  │  │  │  ├─ wait.py
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     ├─ connection.cpython-311.pyc
│     │     │  │  │  │     ├─ proxy.cpython-311.pyc
│     │     │  │  │  │     ├─ queue.cpython-311.pyc
│     │     │  │  │  │     ├─ request.cpython-311.pyc
│     │     │  │  │  │     ├─ response.cpython-311.pyc
│     │     │  │  │  │     ├─ retry.cpython-311.pyc
│     │     │  │  │  │     ├─ ssltransport.cpython-311.pyc
│     │     │  │  │  │     ├─ ssl_.cpython-311.pyc
│     │     │  │  │  │     ├─ ssl_match_hostname.cpython-311.pyc
│     │     │  │  │  │     ├─ timeout.cpython-311.pyc
│     │     │  │  │  │     ├─ url.cpython-311.pyc
│     │     │  │  │  │     ├─ wait.cpython-311.pyc
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ _collections.py
│     │     │  │  │  ├─ _version.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ connection.cpython-311.pyc
│     │     │  │  │     ├─ connectionpool.cpython-311.pyc
│     │     │  │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │  │     ├─ fields.cpython-311.pyc
│     │     │  │  │     ├─ filepost.cpython-311.pyc
│     │     │  │  │     ├─ poolmanager.cpython-311.pyc
│     │     │  │  │     ├─ request.cpython-311.pyc
│     │     │  │  │     ├─ response.cpython-311.pyc
│     │     │  │  │     ├─ _collections.cpython-311.pyc
│     │     │  │  │     ├─ _version.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ vendor.txt
│     │     │  │  ├─ webencodings
│     │     │  │  │  ├─ labels.py
│     │     │  │  │  ├─ mklabels.py
│     │     │  │  │  ├─ tests.py
│     │     │  │  │  ├─ x_user_defined.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ labels.cpython-311.pyc
│     │     │  │  │     ├─ mklabels.cpython-311.pyc
│     │     │  │  │     ├─ tests.cpython-311.pyc
│     │     │  │  │     ├─ x_user_defined.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ six.cpython-311.pyc
│     │     │  │     ├─ typing_extensions.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  ├─ __pip-runner__.py
│     │     │  └─ __pycache__
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     ├─ __main__.cpython-311.pyc
│     │     │     └─ __pip-runner__.cpython-311.pyc
│     │     ├─ pip-22.3.1.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ LICENSE.txt
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ pkg_resources
│     │     │  ├─ extern
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _vendor
│     │     │  │  ├─ appdirs.py
│     │     │  │  ├─ importlib_resources
│     │     │  │  │  ├─ abc.py
│     │     │  │  │  ├─ readers.py
│     │     │  │  │  ├─ simple.py
│     │     │  │  │  ├─ _adapters.py
│     │     │  │  │  ├─ _common.py
│     │     │  │  │  ├─ _compat.py
│     │     │  │  │  ├─ _itertools.py
│     │     │  │  │  ├─ _legacy.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ abc.cpython-311.pyc
│     │     │  │  │     ├─ readers.cpython-311.pyc
│     │     │  │  │     ├─ simple.cpython-311.pyc
│     │     │  │  │     ├─ _adapters.cpython-311.pyc
│     │     │  │  │     ├─ _common.cpython-311.pyc
│     │     │  │  │     ├─ _compat.cpython-311.pyc
│     │     │  │  │     ├─ _itertools.cpython-311.pyc
│     │     │  │  │     ├─ _legacy.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ jaraco
│     │     │  │  │  ├─ context.py
│     │     │  │  │  ├─ functools.py
│     │     │  │  │  ├─ text
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ context.cpython-311.pyc
│     │     │  │  │     ├─ functools.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ more_itertools
│     │     │  │  │  ├─ more.py
│     │     │  │  │  ├─ recipes.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ more.cpython-311.pyc
│     │     │  │  │     ├─ recipes.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ packaging
│     │     │  │  │  ├─ markers.py
│     │     │  │  │  ├─ requirements.py
│     │     │  │  │  ├─ specifiers.py
│     │     │  │  │  ├─ tags.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ _manylinux.py
│     │     │  │  │  ├─ _musllinux.py
│     │     │  │  │  ├─ _structures.py
│     │     │  │  │  ├─ __about__.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ markers.cpython-311.pyc
│     │     │  │  │     ├─ requirements.cpython-311.pyc
│     │     │  │  │     ├─ specifiers.cpython-311.pyc
│     │     │  │  │     ├─ tags.cpython-311.pyc
│     │     │  │  │     ├─ utils.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     ├─ _manylinux.cpython-311.pyc
│     │     │  │  │     ├─ _musllinux.cpython-311.pyc
│     │     │  │  │     ├─ _structures.cpython-311.pyc
│     │     │  │  │     ├─ __about__.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pyparsing
│     │     │  │  │  ├─ actions.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ diagram
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ helpers.py
│     │     │  │  │  ├─ results.py
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ unicode.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ actions.cpython-311.pyc
│     │     │  │  │     ├─ common.cpython-311.pyc
│     │     │  │  │     ├─ core.cpython-311.pyc
│     │     │  │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │  │     ├─ helpers.cpython-311.pyc
│     │     │  │  │     ├─ results.cpython-311.pyc
│     │     │  │  │     ├─ testing.cpython-311.pyc
│     │     │  │  │     ├─ unicode.cpython-311.pyc
│     │     │  │  │     ├─ util.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ zipp.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ appdirs.cpython-311.pyc
│     │     │  │     ├─ zipp.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ pydantic
│     │     │  ├─ aliases.py
│     │     │  ├─ alias_generators.py
│     │     │  ├─ annotated_handlers.py
│     │     │  ├─ class_validators.py
│     │     │  ├─ color.py
│     │     │  ├─ config.py
│     │     │  ├─ dataclasses.py
│     │     │  ├─ datetime_parse.py
│     │     │  ├─ decorator.py
│     │     │  ├─ deprecated
│     │     │  │  ├─ class_validators.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ copy_internals.py
│     │     │  │  ├─ decorator.py
│     │     │  │  ├─ json.py
│     │     │  │  ├─ parse.py
│     │     │  │  ├─ tools.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ class_validators.cpython-311.pyc
│     │     │  │     ├─ config.cpython-311.pyc
│     │     │  │     ├─ copy_internals.cpython-311.pyc
│     │     │  │     ├─ decorator.cpython-311.pyc
│     │     │  │     ├─ json.cpython-311.pyc
│     │     │  │     ├─ parse.cpython-311.pyc
│     │     │  │     ├─ tools.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ env_settings.py
│     │     │  ├─ errors.py
│     │     │  ├─ error_wrappers.py
│     │     │  ├─ experimental
│     │     │  │  ├─ arguments_schema.py
│     │     │  │  ├─ missing_sentinel.py
│     │     │  │  ├─ pipeline.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ arguments_schema.cpython-311.pyc
│     │     │  │     ├─ missing_sentinel.cpython-311.pyc
│     │     │  │     ├─ pipeline.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ fields.py
│     │     │  ├─ functional_serializers.py
│     │     │  ├─ functional_validators.py
│     │     │  ├─ generics.py
│     │     │  ├─ json.py
│     │     │  ├─ json_schema.py
│     │     │  ├─ main.py
│     │     │  ├─ mypy.py
│     │     │  ├─ networks.py
│     │     │  ├─ parse.py
│     │     │  ├─ plugin
│     │     │  │  ├─ _loader.py
│     │     │  │  ├─ _schema_validator.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _loader.cpython-311.pyc
│     │     │  │     ├─ _schema_validator.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ root_model.py
│     │     │  ├─ schema.py
│     │     │  ├─ tools.py
│     │     │  ├─ types.py
│     │     │  ├─ type_adapter.py
│     │     │  ├─ typing.py
│     │     │  ├─ utils.py
│     │     │  ├─ v1
│     │     │  │  ├─ annotated_types.py
│     │     │  │  ├─ class_validators.py
│     │     │  │  ├─ color.py
│     │     │  │  ├─ config.py
│     │     │  │  ├─ dataclasses.py
│     │     │  │  ├─ datetime_parse.py
│     │     │  │  ├─ decorator.py
│     │     │  │  ├─ env_settings.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ error_wrappers.py
│     │     │  │  ├─ fields.py
│     │     │  │  ├─ generics.py
│     │     │  │  ├─ json.py
│     │     │  │  ├─ main.py
│     │     │  │  ├─ mypy.py
│     │     │  │  ├─ networks.py
│     │     │  │  ├─ parse.py
│     │     │  │  ├─ py.typed
│     │     │  │  ├─ schema.py
│     │     │  │  ├─ tools.py
│     │     │  │  ├─ types.py
│     │     │  │  ├─ typing.py
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ validators.py
│     │     │  │  ├─ version.py
│     │     │  │  ├─ _hypothesis_plugin.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ annotated_types.cpython-311.pyc
│     │     │  │     ├─ class_validators.cpython-311.pyc
│     │     │  │     ├─ color.cpython-311.pyc
│     │     │  │     ├─ config.cpython-311.pyc
│     │     │  │     ├─ dataclasses.cpython-311.pyc
│     │     │  │     ├─ datetime_parse.cpython-311.pyc
│     │     │  │     ├─ decorator.cpython-311.pyc
│     │     │  │     ├─ env_settings.cpython-311.pyc
│     │     │  │     ├─ errors.cpython-311.pyc
│     │     │  │     ├─ error_wrappers.cpython-311.pyc
│     │     │  │     ├─ fields.cpython-311.pyc
│     │     │  │     ├─ generics.cpython-311.pyc
│     │     │  │     ├─ json.cpython-311.pyc
│     │     │  │     ├─ main.cpython-311.pyc
│     │     │  │     ├─ mypy.cpython-311.pyc
│     │     │  │     ├─ networks.cpython-311.pyc
│     │     │  │     ├─ parse.cpython-311.pyc
│     │     │  │     ├─ schema.cpython-311.pyc
│     │     │  │     ├─ tools.cpython-311.pyc
│     │     │  │     ├─ types.cpython-311.pyc
│     │     │  │     ├─ typing.cpython-311.pyc
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     ├─ validators.cpython-311.pyc
│     │     │  │     ├─ version.cpython-311.pyc
│     │     │  │     ├─ _hypothesis_plugin.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ validate_call_decorator.py
│     │     │  ├─ validators.py
│     │     │  ├─ version.py
│     │     │  ├─ warnings.py
│     │     │  ├─ _internal
│     │     │  │  ├─ _config.py
│     │     │  │  ├─ _core_metadata.py
│     │     │  │  ├─ _core_utils.py
│     │     │  │  ├─ _dataclasses.py
│     │     │  │  ├─ _decorators.py
│     │     │  │  ├─ _decorators_v1.py
│     │     │  │  ├─ _discriminated_union.py
│     │     │  │  ├─ _docs_extraction.py
│     │     │  │  ├─ _fields.py
│     │     │  │  ├─ _forward_ref.py
│     │     │  │  ├─ _generate_schema.py
│     │     │  │  ├─ _generics.py
│     │     │  │  ├─ _git.py
│     │     │  │  ├─ _import_utils.py
│     │     │  │  ├─ _internal_dataclass.py
│     │     │  │  ├─ _known_annotated_metadata.py
│     │     │  │  ├─ _mock_val_ser.py
│     │     │  │  ├─ _model_construction.py
│     │     │  │  ├─ _namespace_utils.py
│     │     │  │  ├─ _repr.py
│     │     │  │  ├─ _schema_gather.py
│     │     │  │  ├─ _schema_generation_shared.py
│     │     │  │  ├─ _serializers.py
│     │     │  │  ├─ _signature.py
│     │     │  │  ├─ _typing_extra.py
│     │     │  │  ├─ _utils.py
│     │     │  │  ├─ _validate_call.py
│     │     │  │  ├─ _validators.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ _config.cpython-311.pyc
│     │     │  │     ├─ _core_metadata.cpython-311.pyc
│     │     │  │     ├─ _core_utils.cpython-311.pyc
│     │     │  │     ├─ _dataclasses.cpython-311.pyc
│     │     │  │     ├─ _decorators.cpython-311.pyc
│     │     │  │     ├─ _decorators_v1.cpython-311.pyc
│     │     │  │     ├─ _discriminated_union.cpython-311.pyc
│     │     │  │     ├─ _docs_extraction.cpython-311.pyc
│     │     │  │     ├─ _fields.cpython-311.pyc
│     │     │  │     ├─ _forward_ref.cpython-311.pyc
│     │     │  │     ├─ _generate_schema.cpython-311.pyc
│     │     │  │     ├─ _generics.cpython-311.pyc
│     │     │  │     ├─ _git.cpython-311.pyc
│     │     │  │     ├─ _import_utils.cpython-311.pyc
│     │     │  │     ├─ _internal_dataclass.cpython-311.pyc
│     │     │  │     ├─ _known_annotated_metadata.cpython-311.pyc
│     │     │  │     ├─ _mock_val_ser.cpython-311.pyc
│     │     │  │     ├─ _model_construction.cpython-311.pyc
│     │     │  │     ├─ _namespace_utils.cpython-311.pyc
│     │     │  │     ├─ _repr.cpython-311.pyc
│     │     │  │     ├─ _schema_gather.cpython-311.pyc
│     │     │  │     ├─ _schema_generation_shared.cpython-311.pyc
│     │     │  │     ├─ _serializers.cpython-311.pyc
│     │     │  │     ├─ _signature.cpython-311.pyc
│     │     │  │     ├─ _typing_extra.cpython-311.pyc
│     │     │  │     ├─ _utils.cpython-311.pyc
│     │     │  │     ├─ _validate_call.cpython-311.pyc
│     │     │  │     ├─ _validators.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _migration.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ aliases.cpython-311.pyc
│     │     │     ├─ alias_generators.cpython-311.pyc
│     │     │     ├─ annotated_handlers.cpython-311.pyc
│     │     │     ├─ class_validators.cpython-311.pyc
│     │     │     ├─ color.cpython-311.pyc
│     │     │     ├─ config.cpython-311.pyc
│     │     │     ├─ dataclasses.cpython-311.pyc
│     │     │     ├─ datetime_parse.cpython-311.pyc
│     │     │     ├─ decorator.cpython-311.pyc
│     │     │     ├─ env_settings.cpython-311.pyc
│     │     │     ├─ errors.cpython-311.pyc
│     │     │     ├─ error_wrappers.cpython-311.pyc
│     │     │     ├─ fields.cpython-311.pyc
│     │     │     ├─ functional_serializers.cpython-311.pyc
│     │     │     ├─ functional_validators.cpython-311.pyc
│     │     │     ├─ generics.cpython-311.pyc
│     │     │     ├─ json.cpython-311.pyc
│     │     │     ├─ json_schema.cpython-311.pyc
│     │     │     ├─ main.cpython-311.pyc
│     │     │     ├─ mypy.cpython-311.pyc
│     │     │     ├─ networks.cpython-311.pyc
│     │     │     ├─ parse.cpython-311.pyc
│     │     │     ├─ root_model.cpython-311.pyc
│     │     │     ├─ schema.cpython-311.pyc
│     │     │     ├─ tools.cpython-311.pyc
│     │     │     ├─ types.cpython-311.pyc
│     │     │     ├─ type_adapter.cpython-311.pyc
│     │     │     ├─ typing.cpython-311.pyc
│     │     │     ├─ utils.cpython-311.pyc
│     │     │     ├─ validate_call_decorator.cpython-311.pyc
│     │     │     ├─ validators.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ warnings.cpython-311.pyc
│     │     │     ├─ _migration.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ pydantic-2.12.5.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  └─ WHEEL
│     │     ├─ pydantic_core
│     │     │  ├─ core_schema.py
│     │     │  ├─ py.typed
│     │     │  ├─ _pydantic_core.cp311-win_amd64.pyd
│     │     │  ├─ _pydantic_core.pyi
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ core_schema.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ pydantic_core-2.41.5.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ python_dotenv-1.2.2.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ requests
│     │     │  ├─ adapters.py
│     │     │  ├─ api.py
│     │     │  ├─ auth.py
│     │     │  ├─ certs.py
│     │     │  ├─ compat.py
│     │     │  ├─ cookies.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ help.py
│     │     │  ├─ hooks.py
│     │     │  ├─ models.py
│     │     │  ├─ packages.py
│     │     │  ├─ sessions.py
│     │     │  ├─ status_codes.py
│     │     │  ├─ structures.py
│     │     │  ├─ utils.py
│     │     │  ├─ _internal_utils.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __pycache__
│     │     │  │  ├─ adapters.cpython-311.pyc
│     │     │  │  ├─ api.cpython-311.pyc
│     │     │  │  ├─ auth.cpython-311.pyc
│     │     │  │  ├─ certs.cpython-311.pyc
│     │     │  │  ├─ compat.cpython-311.pyc
│     │     │  │  ├─ cookies.cpython-311.pyc
│     │     │  │  ├─ exceptions.cpython-311.pyc
│     │     │  │  ├─ help.cpython-311.pyc
│     │     │  │  ├─ hooks.cpython-311.pyc
│     │     │  │  ├─ models.cpython-311.pyc
│     │     │  │  ├─ packages.cpython-311.pyc
│     │     │  │  ├─ sessions.cpython-311.pyc
│     │     │  │  ├─ status_codes.cpython-311.pyc
│     │     │  │  ├─ structures.cpython-311.pyc
│     │     │  │  ├─ utils.cpython-311.pyc
│     │     │  │  ├─ _internal_utils.cpython-311.pyc
│     │     │  │  ├─ __init__.cpython-311.pyc
│     │     │  │  └─ __version__.cpython-311.pyc
│     │     │  └─ __version__.py
│     │     ├─ requests-2.33.1.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  ├─ LICENSE
│     │     │  │  └─ NOTICE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ setuptools
│     │     │  ├─ archive_util.py
│     │     │  ├─ build_meta.py
│     │     │  ├─ cli-32.exe
│     │     │  ├─ cli-64.exe
│     │     │  ├─ cli-arm64.exe
│     │     │  ├─ cli.exe
│     │     │  ├─ command
│     │     │  │  ├─ alias.py
│     │     │  │  ├─ bdist_egg.py
│     │     │  │  ├─ bdist_rpm.py
│     │     │  │  ├─ build.py
│     │     │  │  ├─ build_clib.py
│     │     │  │  ├─ build_ext.py
│     │     │  │  ├─ build_py.py
│     │     │  │  ├─ develop.py
│     │     │  │  ├─ dist_info.py
│     │     │  │  ├─ easy_install.py
│     │     │  │  ├─ editable_wheel.py
│     │     │  │  ├─ egg_info.py
│     │     │  │  ├─ install.py
│     │     │  │  ├─ install_egg_info.py
│     │     │  │  ├─ install_lib.py
│     │     │  │  ├─ install_scripts.py
│     │     │  │  ├─ launcher manifest.xml
│     │     │  │  ├─ py36compat.py
│     │     │  │  ├─ register.py
│     │     │  │  ├─ rotate.py
│     │     │  │  ├─ saveopts.py
│     │     │  │  ├─ sdist.py
│     │     │  │  ├─ setopt.py
│     │     │  │  ├─ test.py
│     │     │  │  ├─ upload.py
│     │     │  │  ├─ upload_docs.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ alias.cpython-311.pyc
│     │     │  │     ├─ bdist_egg.cpython-311.pyc
│     │     │  │     ├─ bdist_rpm.cpython-311.pyc
│     │     │  │     ├─ build.cpython-311.pyc
│     │     │  │     ├─ build_clib.cpython-311.pyc
│     │     │  │     ├─ build_ext.cpython-311.pyc
│     │     │  │     ├─ build_py.cpython-311.pyc
│     │     │  │     ├─ develop.cpython-311.pyc
│     │     │  │     ├─ dist_info.cpython-311.pyc
│     │     │  │     ├─ easy_install.cpython-311.pyc
│     │     │  │     ├─ editable_wheel.cpython-311.pyc
│     │     │  │     ├─ egg_info.cpython-311.pyc
│     │     │  │     ├─ install.cpython-311.pyc
│     │     │  │     ├─ install_egg_info.cpython-311.pyc
│     │     │  │     ├─ install_lib.cpython-311.pyc
│     │     │  │     ├─ install_scripts.cpython-311.pyc
│     │     │  │     ├─ py36compat.cpython-311.pyc
│     │     │  │     ├─ register.cpython-311.pyc
│     │     │  │     ├─ rotate.cpython-311.pyc
│     │     │  │     ├─ saveopts.cpython-311.pyc
│     │     │  │     ├─ sdist.cpython-311.pyc
│     │     │  │     ├─ setopt.cpython-311.pyc
│     │     │  │     ├─ test.cpython-311.pyc
│     │     │  │     ├─ upload.cpython-311.pyc
│     │     │  │     ├─ upload_docs.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ config
│     │     │  │  ├─ expand.py
│     │     │  │  ├─ pyprojecttoml.py
│     │     │  │  ├─ setupcfg.py
│     │     │  │  ├─ _apply_pyprojecttoml.py
│     │     │  │  ├─ _validate_pyproject
│     │     │  │  │  ├─ error_reporting.py
│     │     │  │  │  ├─ extra_validations.py
│     │     │  │  │  ├─ fastjsonschema_exceptions.py
│     │     │  │  │  ├─ fastjsonschema_validations.py
│     │     │  │  │  ├─ formats.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ error_reporting.cpython-311.pyc
│     │     │  │  │     ├─ extra_validations.cpython-311.pyc
│     │     │  │  │     ├─ fastjsonschema_exceptions.cpython-311.pyc
│     │     │  │  │     ├─ fastjsonschema_validations.cpython-311.pyc
│     │     │  │  │     ├─ formats.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ expand.cpython-311.pyc
│     │     │  │     ├─ pyprojecttoml.cpython-311.pyc
│     │     │  │     ├─ setupcfg.cpython-311.pyc
│     │     │  │     ├─ _apply_pyprojecttoml.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ depends.py
│     │     │  ├─ dep_util.py
│     │     │  ├─ discovery.py
│     │     │  ├─ dist.py
│     │     │  ├─ errors.py
│     │     │  ├─ extension.py
│     │     │  ├─ extern
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ glob.py
│     │     │  ├─ gui-32.exe
│     │     │  ├─ gui-64.exe
│     │     │  ├─ gui-arm64.exe
│     │     │  ├─ gui.exe
│     │     │  ├─ installer.py
│     │     │  ├─ launch.py
│     │     │  ├─ logging.py
│     │     │  ├─ monkey.py
│     │     │  ├─ msvc.py
│     │     │  ├─ namespaces.py
│     │     │  ├─ package_index.py
│     │     │  ├─ py34compat.py
│     │     │  ├─ sandbox.py
│     │     │  ├─ script (dev).tmpl
│     │     │  ├─ script.tmpl
│     │     │  ├─ unicode_utils.py
│     │     │  ├─ version.py
│     │     │  ├─ wheel.py
│     │     │  ├─ windows_support.py
│     │     │  ├─ _deprecation_warning.py
│     │     │  ├─ _distutils
│     │     │  │  ├─ archive_util.py
│     │     │  │  ├─ bcppcompiler.py
│     │     │  │  ├─ ccompiler.py
│     │     │  │  ├─ cmd.py
│     │     │  │  ├─ command
│     │     │  │  │  ├─ bdist.py
│     │     │  │  │  ├─ bdist_dumb.py
│     │     │  │  │  ├─ bdist_rpm.py
│     │     │  │  │  ├─ build.py
│     │     │  │  │  ├─ build_clib.py
│     │     │  │  │  ├─ build_ext.py
│     │     │  │  │  ├─ build_py.py
│     │     │  │  │  ├─ build_scripts.py
│     │     │  │  │  ├─ check.py
│     │     │  │  │  ├─ clean.py
│     │     │  │  │  ├─ config.py
│     │     │  │  │  ├─ install.py
│     │     │  │  │  ├─ install_data.py
│     │     │  │  │  ├─ install_egg_info.py
│     │     │  │  │  ├─ install_headers.py
│     │     │  │  │  ├─ install_lib.py
│     │     │  │  │  ├─ install_scripts.py
│     │     │  │  │  ├─ py37compat.py
│     │     │  │  │  ├─ register.py
│     │     │  │  │  ├─ sdist.py
│     │     │  │  │  ├─ upload.py
│     │     │  │  │  ├─ _framework_compat.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ bdist.cpython-311.pyc
│     │     │  │  │     ├─ bdist_dumb.cpython-311.pyc
│     │     │  │  │     ├─ bdist_rpm.cpython-311.pyc
│     │     │  │  │     ├─ build.cpython-311.pyc
│     │     │  │  │     ├─ build_clib.cpython-311.pyc
│     │     │  │  │     ├─ build_ext.cpython-311.pyc
│     │     │  │  │     ├─ build_py.cpython-311.pyc
│     │     │  │  │     ├─ build_scripts.cpython-311.pyc
│     │     │  │  │     ├─ check.cpython-311.pyc
│     │     │  │  │     ├─ clean.cpython-311.pyc
│     │     │  │  │     ├─ config.cpython-311.pyc
│     │     │  │  │     ├─ install.cpython-311.pyc
│     │     │  │  │     ├─ install_data.cpython-311.pyc
│     │     │  │  │     ├─ install_egg_info.cpython-311.pyc
│     │     │  │  │     ├─ install_headers.cpython-311.pyc
│     │     │  │  │     ├─ install_lib.cpython-311.pyc
│     │     │  │  │     ├─ install_scripts.cpython-311.pyc
│     │     │  │  │     ├─ py37compat.cpython-311.pyc
│     │     │  │  │     ├─ register.cpython-311.pyc
│     │     │  │  │     ├─ sdist.cpython-311.pyc
│     │     │  │  │     ├─ upload.cpython-311.pyc
│     │     │  │  │     ├─ _framework_compat.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ config.py
│     │     │  │  ├─ core.py
│     │     │  │  ├─ cygwinccompiler.py
│     │     │  │  ├─ debug.py
│     │     │  │  ├─ dep_util.py
│     │     │  │  ├─ dir_util.py
│     │     │  │  ├─ dist.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ extension.py
│     │     │  │  ├─ fancy_getopt.py
│     │     │  │  ├─ filelist.py
│     │     │  │  ├─ file_util.py
│     │     │  │  ├─ log.py
│     │     │  │  ├─ msvc9compiler.py
│     │     │  │  ├─ msvccompiler.py
│     │     │  │  ├─ py38compat.py
│     │     │  │  ├─ py39compat.py
│     │     │  │  ├─ spawn.py
│     │     │  │  ├─ sysconfig.py
│     │     │  │  ├─ text_file.py
│     │     │  │  ├─ unixccompiler.py
│     │     │  │  ├─ util.py
│     │     │  │  ├─ version.py
│     │     │  │  ├─ versionpredicate.py
│     │     │  │  ├─ _collections.py
│     │     │  │  ├─ _functools.py
│     │     │  │  ├─ _macos_compat.py
│     │     │  │  ├─ _msvccompiler.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ archive_util.cpython-311.pyc
│     │     │  │     ├─ bcppcompiler.cpython-311.pyc
│     │     │  │     ├─ ccompiler.cpython-311.pyc
│     │     │  │     ├─ cmd.cpython-311.pyc
│     │     │  │     ├─ config.cpython-311.pyc
│     │     │  │     ├─ core.cpython-311.pyc
│     │     │  │     ├─ cygwinccompiler.cpython-311.pyc
│     │     │  │     ├─ debug.cpython-311.pyc
│     │     │  │     ├─ dep_util.cpython-311.pyc
│     │     │  │     ├─ dir_util.cpython-311.pyc
│     │     │  │     ├─ dist.cpython-311.pyc
│     │     │  │     ├─ errors.cpython-311.pyc
│     │     │  │     ├─ extension.cpython-311.pyc
│     │     │  │     ├─ fancy_getopt.cpython-311.pyc
│     │     │  │     ├─ filelist.cpython-311.pyc
│     │     │  │     ├─ file_util.cpython-311.pyc
│     │     │  │     ├─ log.cpython-311.pyc
│     │     │  │     ├─ msvc9compiler.cpython-311.pyc
│     │     │  │     ├─ msvccompiler.cpython-311.pyc
│     │     │  │     ├─ py38compat.cpython-311.pyc
│     │     │  │     ├─ py39compat.cpython-311.pyc
│     │     │  │     ├─ spawn.cpython-311.pyc
│     │     │  │     ├─ sysconfig.cpython-311.pyc
│     │     │  │     ├─ text_file.cpython-311.pyc
│     │     │  │     ├─ unixccompiler.cpython-311.pyc
│     │     │  │     ├─ util.cpython-311.pyc
│     │     │  │     ├─ version.cpython-311.pyc
│     │     │  │     ├─ versionpredicate.cpython-311.pyc
│     │     │  │     ├─ _collections.cpython-311.pyc
│     │     │  │     ├─ _functools.cpython-311.pyc
│     │     │  │     ├─ _macos_compat.cpython-311.pyc
│     │     │  │     ├─ _msvccompiler.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _entry_points.py
│     │     │  ├─ _imp.py
│     │     │  ├─ _importlib.py
│     │     │  ├─ _itertools.py
│     │     │  ├─ _path.py
│     │     │  ├─ _reqs.py
│     │     │  ├─ _vendor
│     │     │  │  ├─ importlib_metadata
│     │     │  │  │  ├─ _adapters.py
│     │     │  │  │  ├─ _collections.py
│     │     │  │  │  ├─ _compat.py
│     │     │  │  │  ├─ _functools.py
│     │     │  │  │  ├─ _itertools.py
│     │     │  │  │  ├─ _meta.py
│     │     │  │  │  ├─ _text.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _adapters.cpython-311.pyc
│     │     │  │  │     ├─ _collections.cpython-311.pyc
│     │     │  │  │     ├─ _compat.cpython-311.pyc
│     │     │  │  │     ├─ _functools.cpython-311.pyc
│     │     │  │  │     ├─ _itertools.cpython-311.pyc
│     │     │  │  │     ├─ _meta.cpython-311.pyc
│     │     │  │  │     ├─ _text.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ importlib_resources
│     │     │  │  │  ├─ abc.py
│     │     │  │  │  ├─ readers.py
│     │     │  │  │  ├─ simple.py
│     │     │  │  │  ├─ _adapters.py
│     │     │  │  │  ├─ _common.py
│     │     │  │  │  ├─ _compat.py
│     │     │  │  │  ├─ _itertools.py
│     │     │  │  │  ├─ _legacy.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ abc.cpython-311.pyc
│     │     │  │  │     ├─ readers.cpython-311.pyc
│     │     │  │  │     ├─ simple.cpython-311.pyc
│     │     │  │  │     ├─ _adapters.cpython-311.pyc
│     │     │  │  │     ├─ _common.cpython-311.pyc
│     │     │  │  │     ├─ _compat.cpython-311.pyc
│     │     │  │  │     ├─ _itertools.cpython-311.pyc
│     │     │  │  │     ├─ _legacy.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ jaraco
│     │     │  │  │  ├─ context.py
│     │     │  │  │  ├─ functools.py
│     │     │  │  │  ├─ text
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ context.cpython-311.pyc
│     │     │  │  │     ├─ functools.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ more_itertools
│     │     │  │  │  ├─ more.py
│     │     │  │  │  ├─ recipes.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ more.cpython-311.pyc
│     │     │  │  │     ├─ recipes.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ ordered_set.py
│     │     │  │  ├─ packaging
│     │     │  │  │  ├─ markers.py
│     │     │  │  │  ├─ requirements.py
│     │     │  │  │  ├─ specifiers.py
│     │     │  │  │  ├─ tags.py
│     │     │  │  │  ├─ utils.py
│     │     │  │  │  ├─ version.py
│     │     │  │  │  ├─ _manylinux.py
│     │     │  │  │  ├─ _musllinux.py
│     │     │  │  │  ├─ _structures.py
│     │     │  │  │  ├─ __about__.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ markers.cpython-311.pyc
│     │     │  │  │     ├─ requirements.cpython-311.pyc
│     │     │  │  │     ├─ specifiers.cpython-311.pyc
│     │     │  │  │     ├─ tags.cpython-311.pyc
│     │     │  │  │     ├─ utils.cpython-311.pyc
│     │     │  │  │     ├─ version.cpython-311.pyc
│     │     │  │  │     ├─ _manylinux.cpython-311.pyc
│     │     │  │  │     ├─ _musllinux.cpython-311.pyc
│     │     │  │  │     ├─ _structures.cpython-311.pyc
│     │     │  │  │     ├─ __about__.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pyparsing
│     │     │  │  │  ├─ actions.py
│     │     │  │  │  ├─ common.py
│     │     │  │  │  ├─ core.py
│     │     │  │  │  ├─ diagram
│     │     │  │  │  │  ├─ __init__.py
│     │     │  │  │  │  └─ __pycache__
│     │     │  │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  │  ├─ exceptions.py
│     │     │  │  │  ├─ helpers.py
│     │     │  │  │  ├─ results.py
│     │     │  │  │  ├─ testing.py
│     │     │  │  │  ├─ unicode.py
│     │     │  │  │  ├─ util.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ actions.cpython-311.pyc
│     │     │  │  │     ├─ common.cpython-311.pyc
│     │     │  │  │     ├─ core.cpython-311.pyc
│     │     │  │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │  │     ├─ helpers.cpython-311.pyc
│     │     │  │  │     ├─ results.cpython-311.pyc
│     │     │  │  │     ├─ testing.cpython-311.pyc
│     │     │  │  │     ├─ unicode.cpython-311.pyc
│     │     │  │  │     ├─ util.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ tomli
│     │     │  │  │  ├─ _parser.py
│     │     │  │  │  ├─ _re.py
│     │     │  │  │  ├─ _types.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ _parser.cpython-311.pyc
│     │     │  │  │     ├─ _re.cpython-311.pyc
│     │     │  │  │     ├─ _types.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ typing_extensions.py
│     │     │  │  ├─ zipp.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ ordered_set.cpython-311.pyc
│     │     │  │     ├─ typing_extensions.cpython-311.pyc
│     │     │  │     ├─ zipp.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ archive_util.cpython-311.pyc
│     │     │     ├─ build_meta.cpython-311.pyc
│     │     │     ├─ depends.cpython-311.pyc
│     │     │     ├─ dep_util.cpython-311.pyc
│     │     │     ├─ discovery.cpython-311.pyc
│     │     │     ├─ dist.cpython-311.pyc
│     │     │     ├─ errors.cpython-311.pyc
│     │     │     ├─ extension.cpython-311.pyc
│     │     │     ├─ glob.cpython-311.pyc
│     │     │     ├─ installer.cpython-311.pyc
│     │     │     ├─ launch.cpython-311.pyc
│     │     │     ├─ logging.cpython-311.pyc
│     │     │     ├─ monkey.cpython-311.pyc
│     │     │     ├─ msvc.cpython-311.pyc
│     │     │     ├─ namespaces.cpython-311.pyc
│     │     │     ├─ package_index.cpython-311.pyc
│     │     │     ├─ py34compat.cpython-311.pyc
│     │     │     ├─ sandbox.cpython-311.pyc
│     │     │     ├─ unicode_utils.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ wheel.cpython-311.pyc
│     │     │     ├─ windows_support.cpython-311.pyc
│     │     │     ├─ _deprecation_warning.cpython-311.pyc
│     │     │     ├─ _entry_points.cpython-311.pyc
│     │     │     ├─ _imp.cpython-311.pyc
│     │     │     ├─ _importlib.cpython-311.pyc
│     │     │     ├─ _itertools.cpython-311.pyc
│     │     │     ├─ _path.cpython-311.pyc
│     │     │     ├─ _reqs.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ setuptools-65.5.0.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ sniffio
│     │     │  ├─ py.typed
│     │     │  ├─ _impl.py
│     │     │  ├─ _tests
│     │     │  │  ├─ test_sniffio.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ test_sniffio.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ _impl.cpython-311.pyc
│     │     │     ├─ _version.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ sniffio-1.3.1.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ LICENSE
│     │     │  ├─ LICENSE.APACHE2
│     │     │  ├─ LICENSE.MIT
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ starlette
│     │     │  ├─ applications.py
│     │     │  ├─ authentication.py
│     │     │  ├─ background.py
│     │     │  ├─ concurrency.py
│     │     │  ├─ config.py
│     │     │  ├─ convertors.py
│     │     │  ├─ datastructures.py
│     │     │  ├─ endpoints.py
│     │     │  ├─ exceptions.py
│     │     │  ├─ formparsers.py
│     │     │  ├─ middleware
│     │     │  │  ├─ authentication.py
│     │     │  │  ├─ base.py
│     │     │  │  ├─ cors.py
│     │     │  │  ├─ errors.py
│     │     │  │  ├─ exceptions.py
│     │     │  │  ├─ gzip.py
│     │     │  │  ├─ httpsredirect.py
│     │     │  │  ├─ sessions.py
│     │     │  │  ├─ trustedhost.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ authentication.cpython-311.pyc
│     │     │  │     ├─ base.cpython-311.pyc
│     │     │  │     ├─ cors.cpython-311.pyc
│     │     │  │     ├─ errors.cpython-311.pyc
│     │     │  │     ├─ exceptions.cpython-311.pyc
│     │     │  │     ├─ gzip.cpython-311.pyc
│     │     │  │     ├─ httpsredirect.cpython-311.pyc
│     │     │  │     ├─ sessions.cpython-311.pyc
│     │     │  │     ├─ trustedhost.cpython-311.pyc
│     │     │  │     ├─ wsgi.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ requests.py
│     │     │  ├─ responses.py
│     │     │  ├─ routing.py
│     │     │  ├─ schemas.py
│     │     │  ├─ staticfiles.py
│     │     │  ├─ status.py
│     │     │  ├─ templating.py
│     │     │  ├─ testclient.py
│     │     │  ├─ types.py
│     │     │  ├─ websockets.py
│     │     │  ├─ _exception_handler.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ applications.cpython-311.pyc
│     │     │     ├─ authentication.cpython-311.pyc
│     │     │     ├─ background.cpython-311.pyc
│     │     │     ├─ concurrency.cpython-311.pyc
│     │     │     ├─ config.cpython-311.pyc
│     │     │     ├─ convertors.cpython-311.pyc
│     │     │     ├─ datastructures.cpython-311.pyc
│     │     │     ├─ endpoints.cpython-311.pyc
│     │     │     ├─ exceptions.cpython-311.pyc
│     │     │     ├─ formparsers.cpython-311.pyc
│     │     │     ├─ requests.cpython-311.pyc
│     │     │     ├─ responses.cpython-311.pyc
│     │     │     ├─ routing.cpython-311.pyc
│     │     │     ├─ schemas.cpython-311.pyc
│     │     │     ├─ staticfiles.cpython-311.pyc
│     │     │     ├─ status.cpython-311.pyc
│     │     │     ├─ templating.cpython-311.pyc
│     │     │     ├─ testclient.cpython-311.pyc
│     │     │     ├─ types.cpython-311.pyc
│     │     │     ├─ websockets.cpython-311.pyc
│     │     │     ├─ _exception_handler.cpython-311.pyc
│     │     │     ├─ _utils.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ starlette-1.0.0.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.md
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ tqdm
│     │     │  ├─ asyncio.py
│     │     │  ├─ auto.py
│     │     │  ├─ autonotebook.py
│     │     │  ├─ cli.py
│     │     │  ├─ completion.sh
│     │     │  ├─ contrib
│     │     │  │  ├─ bells.py
│     │     │  │  ├─ concurrent.py
│     │     │  │  ├─ discord.py
│     │     │  │  ├─ itertools.py
│     │     │  │  ├─ logging.py
│     │     │  │  ├─ slack.py
│     │     │  │  ├─ telegram.py
│     │     │  │  ├─ utils_worker.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ bells.cpython-311.pyc
│     │     │  │     ├─ concurrent.cpython-311.pyc
│     │     │  │     ├─ discord.cpython-311.pyc
│     │     │  │     ├─ itertools.cpython-311.pyc
│     │     │  │     ├─ logging.cpython-311.pyc
│     │     │  │     ├─ slack.cpython-311.pyc
│     │     │  │     ├─ telegram.cpython-311.pyc
│     │     │  │     ├─ utils_worker.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ dask.py
│     │     │  ├─ gui.py
│     │     │  ├─ keras.py
│     │     │  ├─ notebook.py
│     │     │  ├─ rich.py
│     │     │  ├─ std.py
│     │     │  ├─ tk.py
│     │     │  ├─ tqdm.1
│     │     │  ├─ utils.py
│     │     │  ├─ version.py
│     │     │  ├─ _main.py
│     │     │  ├─ _monitor.py
│     │     │  ├─ _tqdm.py
│     │     │  ├─ _tqdm_gui.py
│     │     │  ├─ _tqdm_notebook.py
│     │     │  ├─ _tqdm_pandas.py
│     │     │  ├─ _utils.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ asyncio.cpython-311.pyc
│     │     │     ├─ auto.cpython-311.pyc
│     │     │     ├─ autonotebook.cpython-311.pyc
│     │     │     ├─ cli.cpython-311.pyc
│     │     │     ├─ dask.cpython-311.pyc
│     │     │     ├─ gui.cpython-311.pyc
│     │     │     ├─ keras.cpython-311.pyc
│     │     │     ├─ notebook.cpython-311.pyc
│     │     │     ├─ rich.cpython-311.pyc
│     │     │     ├─ std.cpython-311.pyc
│     │     │     ├─ tk.cpython-311.pyc
│     │     │     ├─ utils.cpython-311.pyc
│     │     │     ├─ version.cpython-311.pyc
│     │     │     ├─ _main.cpython-311.pyc
│     │     │     ├─ _monitor.cpython-311.pyc
│     │     │     ├─ _tqdm.cpython-311.pyc
│     │     │     ├─ _tqdm_gui.cpython-311.pyc
│     │     │     ├─ _tqdm_notebook.cpython-311.pyc
│     │     │     ├─ _tqdm_pandas.cpython-311.pyc
│     │     │     ├─ _utils.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ tqdm-4.67.3.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENCE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ top_level.txt
│     │     │  └─ WHEEL
│     │     ├─ typing_extensions-4.15.0.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ typing_extensions.py
│     │     ├─ typing_inspection
│     │     │  ├─ introspection.py
│     │     │  ├─ py.typed
│     │     │  ├─ typing_objects.py
│     │     │  ├─ typing_objects.pyi
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ introspection.cpython-311.pyc
│     │     │     ├─ typing_objects.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ typing_inspection-0.4.2.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ urllib3
│     │     │  ├─ connection.py
│     │     │  ├─ connectionpool.py
│     │     │  ├─ contrib
│     │     │  │  ├─ emscripten
│     │     │  │  │  ├─ connection.py
│     │     │  │  │  ├─ emscripten_fetch_worker.js
│     │     │  │  │  ├─ fetch.py
│     │     │  │  │  ├─ request.py
│     │     │  │  │  ├─ response.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ connection.cpython-311.pyc
│     │     │  │  │     ├─ fetch.cpython-311.pyc
│     │     │  │  │     ├─ request.cpython-311.pyc
│     │     │  │  │     ├─ response.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ pyopenssl.py
│     │     │  │  ├─ socks.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ pyopenssl.cpython-311.pyc
│     │     │  │     ├─ socks.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ exceptions.py
│     │     │  ├─ fields.py
│     │     │  ├─ filepost.py
│     │     │  ├─ http2
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ probe.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-311.pyc
│     │     │  │     ├─ probe.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ poolmanager.py
│     │     │  ├─ py.typed
│     │     │  ├─ response.py
│     │     │  ├─ util
│     │     │  │  ├─ connection.py
│     │     │  │  ├─ proxy.py
│     │     │  │  ├─ request.py
│     │     │  │  ├─ response.py
│     │     │  │  ├─ retry.py
│     │     │  │  ├─ ssltransport.py
│     │     │  │  ├─ ssl_.py
│     │     │  │  ├─ ssl_match_hostname.py
│     │     │  │  ├─ timeout.py
│     │     │  │  ├─ url.py
│     │     │  │  ├─ util.py
│     │     │  │  ├─ wait.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ connection.cpython-311.pyc
│     │     │  │     ├─ proxy.cpython-311.pyc
│     │     │  │     ├─ request.cpython-311.pyc
│     │     │  │     ├─ response.cpython-311.pyc
│     │     │  │     ├─ retry.cpython-311.pyc
│     │     │  │     ├─ ssltransport.cpython-311.pyc
│     │     │  │     ├─ ssl_.cpython-311.pyc
│     │     │  │     ├─ ssl_match_hostname.cpython-311.pyc
│     │     │  │     ├─ timeout.cpython-311.pyc
│     │     │  │     ├─ url.cpython-311.pyc
│     │     │  │     ├─ util.cpython-311.pyc
│     │     │  │     ├─ wait.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ _base_connection.py
│     │     │  ├─ _collections.py
│     │     │  ├─ _request_methods.py
│     │     │  ├─ _version.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ connection.cpython-311.pyc
│     │     │     ├─ connectionpool.cpython-311.pyc
│     │     │     ├─ exceptions.cpython-311.pyc
│     │     │     ├─ fields.cpython-311.pyc
│     │     │     ├─ filepost.cpython-311.pyc
│     │     │     ├─ poolmanager.cpython-311.pyc
│     │     │     ├─ response.cpython-311.pyc
│     │     │     ├─ _base_connection.cpython-311.pyc
│     │     │     ├─ _collections.cpython-311.pyc
│     │     │     ├─ _request_methods.cpython-311.pyc
│     │     │     ├─ _version.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     ├─ urllib3-2.6.3.dist-info
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.txt
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  └─ WHEEL
│     │     ├─ uvicorn
│     │     │  ├─ config.py
│     │     │  ├─ importer.py
│     │     │  ├─ lifespan
│     │     │  │  ├─ off.py
│     │     │  │  ├─ on.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ off.cpython-311.pyc
│     │     │  │     ├─ on.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ logging.py
│     │     │  ├─ loops
│     │     │  │  ├─ asyncio.py
│     │     │  │  ├─ auto.py
│     │     │  │  ├─ uvloop.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asyncio.cpython-311.pyc
│     │     │  │     ├─ auto.cpython-311.pyc
│     │     │  │     ├─ uvloop.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ main.py
│     │     │  ├─ middleware
│     │     │  │  ├─ asgi2.py
│     │     │  │  ├─ message_logger.py
│     │     │  │  ├─ proxy_headers.py
│     │     │  │  ├─ wsgi.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ asgi2.cpython-311.pyc
│     │     │  │     ├─ message_logger.cpython-311.pyc
│     │     │  │     ├─ proxy_headers.cpython-311.pyc
│     │     │  │     ├─ wsgi.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ protocols
│     │     │  │  ├─ http
│     │     │  │  │  ├─ auto.py
│     │     │  │  │  ├─ flow_control.py
│     │     │  │  │  ├─ h11_impl.py
│     │     │  │  │  ├─ httptools_impl.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auto.cpython-311.pyc
│     │     │  │  │     ├─ flow_control.cpython-311.pyc
│     │     │  │  │     ├─ h11_impl.cpython-311.pyc
│     │     │  │  │     ├─ httptools_impl.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ utils.py
│     │     │  │  ├─ websockets
│     │     │  │  │  ├─ auto.py
│     │     │  │  │  ├─ websockets_impl.py
│     │     │  │  │  ├─ websockets_sansio_impl.py
│     │     │  │  │  ├─ wsproto_impl.py
│     │     │  │  │  ├─ __init__.py
│     │     │  │  │  └─ __pycache__
│     │     │  │  │     ├─ auto.cpython-311.pyc
│     │     │  │  │     ├─ websockets_impl.cpython-311.pyc
│     │     │  │  │     ├─ websockets_sansio_impl.cpython-311.pyc
│     │     │  │  │     ├─ wsproto_impl.cpython-311.pyc
│     │     │  │  │     └─ __init__.cpython-311.pyc
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ utils.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ py.typed
│     │     │  ├─ server.py
│     │     │  ├─ supervisors
│     │     │  │  ├─ basereload.py
│     │     │  │  ├─ multiprocess.py
│     │     │  │  ├─ statreload.py
│     │     │  │  ├─ watchfilesreload.py
│     │     │  │  ├─ __init__.py
│     │     │  │  └─ __pycache__
│     │     │  │     ├─ basereload.cpython-311.pyc
│     │     │  │     ├─ multiprocess.cpython-311.pyc
│     │     │  │     ├─ statreload.cpython-311.pyc
│     │     │  │     ├─ watchfilesreload.cpython-311.pyc
│     │     │  │     └─ __init__.cpython-311.pyc
│     │     │  ├─ workers.py
│     │     │  ├─ _compat.py
│     │     │  ├─ _subprocess.py
│     │     │  ├─ _types.py
│     │     │  ├─ __init__.py
│     │     │  ├─ __main__.py
│     │     │  └─ __pycache__
│     │     │     ├─ config.cpython-311.pyc
│     │     │     ├─ importer.cpython-311.pyc
│     │     │     ├─ logging.cpython-311.pyc
│     │     │     ├─ main.cpython-311.pyc
│     │     │     ├─ server.cpython-311.pyc
│     │     │     ├─ workers.cpython-311.pyc
│     │     │     ├─ _compat.cpython-311.pyc
│     │     │     ├─ _subprocess.cpython-311.pyc
│     │     │     ├─ _types.cpython-311.pyc
│     │     │     ├─ __init__.cpython-311.pyc
│     │     │     └─ __main__.cpython-311.pyc
│     │     ├─ uvicorn-0.44.0.dist-info
│     │     │  ├─ entry_points.txt
│     │     │  ├─ INSTALLER
│     │     │  ├─ licenses
│     │     │  │  └─ LICENSE.md
│     │     │  ├─ METADATA
│     │     │  ├─ RECORD
│     │     │  ├─ REQUESTED
│     │     │  └─ WHEEL
│     │     ├─ _distutils_hack
│     │     │  ├─ override.py
│     │     │  ├─ __init__.py
│     │     │  └─ __pycache__
│     │     │     ├─ override.cpython-311.pyc
│     │     │     └─ __init__.cpython-311.pyc
│     │     └─ __pycache__
│     │        └─ typing_extensions.cpython-311.pyc
│     ├─ pyvenv.cfg
│     └─ Scripts
│        ├─ activate
│        ├─ activate.bat
│        ├─ Activate.ps1
│        ├─ deactivate.bat
│        ├─ distro.exe
│        ├─ dotenv.exe
│        ├─ fastapi.exe
│        ├─ httpx.exe
│        ├─ normalizer.exe
│        ├─ openai.exe
│        ├─ pip.exe
│        ├─ pip3.11.exe
│        ├─ pip3.exe
│        ├─ python.exe
│        ├─ pythonw.exe
│        ├─ tqdm.exe
│        └─ uvicorn.exe
├─ Backend
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ src
│  │  ├─ app.ts
│  │  ├─ config
│  │  │  ├─ axios.ts
│  │  │  ├─ index.ts
│  │  │  ├─ mongo.ts
│  │  │  └─ redis.ts
│  │  ├─ controllers
│  │  │  └─ emailController.ts
│  │  ├─ jobs
│  │  │  └─ processEmailsJob.ts
│  │  ├─ middlewares
│  │  │  └─ errorHandler.ts
│  │  ├─ models
│  │  │  ├─ labelConfig.model.ts
│  │  │  └─ processedEmail.model.ts
│  │  ├─ queue
│  │  │  ├─ connection.ts
│  │  │  ├─ emailQueue.ts
│  │  │  └─ worker.ts
│  │  ├─ repositories
│  │  │  ├─ labelConfigRepo.ts
│  │  │  └─ processedEmailRepo.ts
│  │  ├─ routes
│  │  │  └─ emailRoutes.ts
│  │  ├─ services
│  │  │  ├─ aiService.ts
│  │  │  └─ gmailService.ts
│  │  ├─ storage
│  │  │  └─ token.json
│  │  ├─ types
│  │  │  └─ email.ts
│  │  └─ utils
│  └─ tsconfig.json
├─ client
├─ README.md
└─ worker

```