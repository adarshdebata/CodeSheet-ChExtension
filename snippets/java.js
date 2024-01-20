export function generateCode(codeSnippet) {
    switch (codeSnippet) {
        case 'boilerplate':
            return 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}';
        case 'bubbleSort':
            return 'public class BubbleSort {\n  public static void bubbleSort(int[] arr) {\n' +
                '    int n = arr.length;\n' +
                '    for (int i = 0; i < n-1; i++) {\n' +
                '        for (int j = 0; j < n-i-1; j++) {\n' +
                '            if (arr[j] > arr[j+1]) {\n' +
                '                // swap temp and arr[i]\n' +
                '                int temp = arr[j];\n' +
                '                arr[j] = arr[j+1];\n' +
                '                arr[j+1] = temp;\n' +
                '            }\n' +
                '        }\n' +
                '    }\n' +
                '  }\n}';

        case 'insertionSort':
            return 'public class InsertionSort {\n' +
                '  public static void insertionSort(int[] arr) {\n' +
                '    int n = arr.length;\n' +
                '    for (int i = 1; i < n; ++i) {\n' +
                '      int key = arr[i];\n' +
                '      int j = i - 1;\n' +
                '      while (j >= 0 && arr[j] > key) {\n' +
                '        arr[j + 1] = arr[j];\n' +
                '        j = j - 1;\n' +
                '      }\n' +
                '      arr[j + 1] = key;\n' +
                '    }\n' +
                '  }\n' +
                '}';

        case 'quickSort':
            return 'public class QuickSort {\n' +
                '  public static void quickSort(int[] arr, int low, int high) {\n' +
                '    if (low < high) {\n' +
                '      int partitionIndex = partition(arr, low, high);\n' +
                '      quickSort(arr, low, partitionIndex - 1);\n' +
                '      quickSort(arr, partitionIndex + 1, high);\n' +
                '    }\n' +
                '  }\n\n' +
                '  private static int partition(int[] arr, int low, int high) {\n' +
                '    int pivot = arr[high];\n' +
                '    int i = low - 1;\n' +
                '    for (int j = low; j < high; j++) {\n' +
                '      if (arr[j] <= pivot) {\n' +
                '        i++;\n' +
                '        int temp = arr[i];\n' +
                '        arr[i] = arr[j];\n' +
                '        arr[j] = temp;\n' +
                '      }\n' +
                '    }\n' +
                '    int temp = arr[i + 1];\n' +
                '    arr[i + 1] = arr[high];\n' +
                '    arr[high] = temp;\n' +
                '    return i + 1;\n' +
                '  }\n' +
                '}';

        case 'mergeSort':
            return 'public class MergeSort {\n' +
                '  public static void mergeSort(int[] arr, int low, int high) {\n' +
                '    if (low < high) {\n' +
                '      int mid = low + (high - low) / 2;\n' +
                '      mergeSort(arr, low, mid);\n' +
                '      mergeSort(arr, mid + 1, high);\n' +
                '      merge(arr, low, mid, high);\n' +
                '    }\n' +
                '  }\n' +
                '\n' +
                '  private static void merge(int[] arr, int low, int mid, int high) {\n' +
                '    int n1 = mid - low + 1;\n' +
                '    int n2 = high - mid;\n' +
                '\n' +
                '    int[] left = new int[n1];\n' +
                '    int[] right = new int[n2];\n' +
                '\n' +
                '    for (int i = 0; i < n1; ++i) {\n' +
                '      left[i] = arr[low + i];\n' +
                '    }\n' +
                '    for (int j = 0; j < n2; ++j) {\n' +
                '      right[j] = arr[mid + 1 + j];\n' +
                '    }\n' +
                '\n' +
                '    int i = 0, j = 0;\n' +
                '    int k = low;\n' +
                '    while (i < n1 && j < n2) {\n' +
                '      if (left[i] <= right[j]) {\n' +
                '        arr[k] = left[i];\n' +
                '        i++;\n' +
                '      } else {\n' +
                '        arr[k] = right[j];\n' +
                '        j++;\n' +
                '      }\n' +
                '      k++;\n' +
                '    }\n' +
                '\n' +
                '    while (i < n1) {\n' +
                '      arr[k] = left[i];\n' +
                '      i++;\n' +
                '      k++;\n' +
                '    }\n' +
                '\n' +
                '    while (j < n2) {\n' +
                '      arr[k] = right[j];\n' +
                '      j++;\n' +
                '      k++;\n' +
                '    }\n' +
                '  }\n' +
                '}';

        case 'dijkstraAlgorithm':
            return 'import java.util.*;\n\n' +
                'public class DijkstraAlgorithm {\n' +
                '    private static final int V = 5; // Number of vertices\n' +
                '\n' +
                '    int minDistance(int dist[], Boolean sptSet[]) {\n' +
                '        // Dijkstra\'s algorithm logic\n' +
                '        return 0;\n' +
                '    }\n' +
                '\n' +
                '    void printSolution(int dist[]) {\n' +
                '        // Print solution\n' +
                '    }\n' +
                '\n' +
                '    void dijkstra(int graph[][], int src) {\n' +
                '        // Dijkstra\'s algorithm logic\n' +
                '    }\n' +
                '\n' +
                '    public static void main(String[] args) {\n' +
                '        DijkstraAlgorithm dijkstraAlgorithm = new DijkstraAlgorithm();\n' +
                '        int graph[][] = new int[][]{{0, 2, 0, 6, 0}, {2, 0, 3, 8, 5}, {0, 3, 0, 0, 7}, {6, 8, 0, 0, 9}, {0, 5, 7, 9, 0}};\n' +
                '        dijkstraAlgorithm.dijkstra(graph, 0);\n' +
                '    }\n' +
                '}';

        case 'depthFirstSearch(DFS)':
            return 'import java.util.List;\nimport java.util.Stack;\n\npublic class DepthFirstSearch {\n' +
                '  public static void dfs(List<List<Integer>> graph, int startNode) {\n' +
                '    boolean[] visited = new boolean[graph.size()];\n' +
                '    Stack<Integer> stack = new Stack<>();\n' +
                '    stack.push(startNode);\n\n' +
                '    while (!stack.isEmpty()) {\n' +
                '      int currentNode = stack.pop();\n' +
                '      if (!visited[currentNode]) {\n' +
                '        System.out.print(currentNode + " ");\n' +
                '        visited[currentNode] = true;\n' +
                '        for (int neighbor : graph.get(currentNode)) {\n' +
                '          if (!visited[neighbor]) {\n' +
                '            stack.push(neighbor);\n' +
                '          }\n' +
                '        }\n' +
                '      }\n' +
                '    }\n' +
                '  }\n' +
                '}';

        case 'breadthFirstSearch(BFS)':
            return 'import java.util.LinkedList;\nimport java.util.Queue;\n\n' +
                'public class BFS {\n' +
                '    static class Graph {\n' +
                '        private int V; // Number of vertices\n' +
                '        private LinkedList<Integer>[] adj; // Adjacency list\n' +
                '\n' +
                '        @SuppressWarnings("unchecked")\n' +
                '        Graph(int v) {\n' +
                '            V = v;\n' +
                '            adj = new LinkedList[v];\n' +
                '            for (int i = 0; i < v; ++i)\n' +
                '                adj[i] = new LinkedList<>();\n' +
                '        }\n' +
                '\n' +
                '        void addEdge(int v, int w) {\n' +
                '            adj[v].add(w);\n' +
                '        }\n' +
                '\n' +
                '        void BFS(int s) {\n' +
                '            boolean[] visited = new boolean[V];\n' +
                '            Queue<Integer> queue = new LinkedList<>();\n' +
                '\n' +
                '            visited[s] = true;\n' +
                '            queue.add(s);\n' +
                '\n' +
                '            while (!queue.isEmpty()) {\n' +
                '                s = queue.poll();\n' +
                '                System.out.print(s + " ");\n' +
                '\n' +
                '                for (int n : adj[s]) {\n' +
                '                    if (!visited[n]) {\n' +
                '                        visited[n] = true;\n' +
                '                        queue.add(n);\n' +
                '                    }\n' +
                '                }\n' +
                '            }\n' +
                '        }\n' +
                '    }\n' +
                '\n' +
                '    public static void main(String[] args) {\n' +
                '        Graph g = new Graph(4);\n' +
                '        g.addEdge(0, 1);\n' +
                '        g.addEdge(0, 2);\n' +
                '        g.addEdge(1, 2);\n' +
                '        g.addEdge(2, 0);\n' +
                '        g.addEdge(2, 3);\n' +
                '        g.addEdge(3, 3);\n' +
                '\n' +
                '        System.out.println("Breadth First Traversal (starting from vertex 2):");\n' +
                '        g.BFS(2);\n' +
                '    }\n' +
                '}';

        default:
            return 'Invalid code snippet for Java';
    }
}