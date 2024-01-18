# Visualized Latency
Version 0.37.4.


## Description

An informative network webpage for the [PRSN website](https://redsismica.uprm.edu/index.php).  
Will display each NTRIP station and their internet latency, visualized as a graph for trend analysis.  
The webpage will also include other important network information like maximum/minimum latency, root mean square (RMS), etc.

![WIP version of graph](https://github.com/tiffie1/prsn_webpage/assets/139599672/b4e60d4f-7bc4-4e04-bcde-8f8143c6dd7b)


## Roadmap

Currently, the webpage has not reached a full release version.  

A full release will have the following:
- Graphs that update automatically.
- Layout for the 30+ stations expected to be recorded.
- Station browser for ease of use.

Once completed, the project will be considered to have reached version 1.0.0.  
Additional updates beyond 1.0.0 will likely have optimizations on a varying amount of severity.


### Todo List

~~1. Create `.json` package for project (for dependency logging and managing meta data).~~
2.  Develop file watching system (with a possible way to manage disk space usage).
  - a possible method to do this has been identified.
3.  Expand database to contain information for all servers to be monitored.
4.  Add server browsing list.  


### Completed

- Baseline template for webpage format.
- Graph creation.
- Optimization for single-function creation of graphs.


## Authors and Acknowledgements
This project is being developed entirely by [@tiffie](https://github.com/tiffie1).  
A considerable amount of guidance and general tips given by [@imustend](https://github.com/imustend).  

Development is entirely funded by the [Puerto Rico Seismic Network](https://redsismica.uprm.edu/index.php).
