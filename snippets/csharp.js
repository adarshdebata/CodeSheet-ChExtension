export function generateCode(codeSnippet) {
    switch (codeSnippet) {
        case 'boilerplate':
            return 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}';

        case 'bubbleSort':
            return 'using System;\n\npublic class BubbleSort {\n    public static void Main(string[] args) {\n        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };\n\n        Console.WriteLine("Original array:");\n        PrintArray(arr);\n\n        BubbleSortArray(arr);\n\n        Console.WriteLine("\\nSorted array:");\n        PrintArray(arr);\n    }\n\n    static void BubbleSortArray(int[] arr) {\n        int n = arr.Length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    // swap temp and arr[i]\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = temp;\n                }\n            }\n        }\n    }\n\n    static void PrintArray(int[] arr) {\n        foreach (var item in arr) {\n            Console.Write(item + " ");\n        }\n        Console.WriteLine();\n    }\n}';

        case 'insertionSort':
            return 'using System;\n\nclass InsertionSort\n{\n    void InsertionSort(int[] arr)\n    {\n        int n = arr.Length;\n        for (int i = 1; i < n; ++i)\n        {\n            int key = arr[i];\n            int j = i - 1;\n\n              while (j >= 0 && arr[j] > key)\n            {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n\n    // A utility function to print an array of size n\n    void PrintArray(int[] arr)\n    {\n        int n = arr.Length;\n        for (int i = 0; i < n; ++i)\n            Console.Write(arr[i] + " ");\n        Console.WriteLine();\n    }\n\n    public static void Main()\n    {\n        int[] arr = { 12, 11, 13, 5, 6 };\n        InsertionSort ob = new InsertionSort();\n        ob.InsertionSort(arr);\n        Console.WriteLine("Sorted array");\n        ob.PrintArray(arr);\n    }\n}';

        case 'quickSort':
            return 'using System;\n\npublic class QuickSort {\n    static void QuickSort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = Partition(arr, low, high);\n            QuickSort(arr, low, pi - 1);\n            QuickSort(arr, pi + 1, high);\n        }\n    }\n\n    static int Partition(int[] arr, int low, int high) {\n        int pivot = arr[high];\n        int i = low - 1;\n\n        for (int j = low; j < high; j++) {\n            if (arr[j] < pivot) {\n                i++;\n                Swap(arr, i, j);\n            }\n        }\n\n        Swap(arr, i + 1, high);\n        return i + 1;\n    }\n\n    static void Swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    public static void Main() {\n        int[] arr = { 64, 25, 12, 22, 11 };\n        int n = arr.Length;\n\n        Console.WriteLine("Original Array: " + string.Join(", ", arr));\n\n        QuickSort(arr, 0, n - 1);\n\n        Console.WriteLine("Sorted Array: " + string.Join(", ", arr));\n    }\n}';

        case 'mergeSort':
            return 'using System;\n\npublic class MergeSort\n{\n    // Merge two subarrays of arr[].\n' +
                'void merge(int[] arr, int l, int m, int r)\n' +
                '{\n' +
                '    int n1 = m - l + 1;\n' +
                '    int n2 = r - m;\n' +
                '    int[] L = new int[n1];\n' +
                '    int[] R = new int[n2];\n' +
                '    int i, j;\n' +
                '    for (i = 0; i < n1; ++i)\n' +
                '        L[i] = arr[l + i];\n' +
                '    for (j = 0; j < n2; ++j)\n' +
                '        R[j] = arr[m + 1 + j];\n' +
                '    i = 0;\n' +
                '    j = 0;\n' +
                '    int k = l;\n' +
                '    while (i < n1 && j < n2)\n' +
                '    {\n' +
                '        if (L[i] <= R[j])\n' +
                '        {\n' +
                '            arr[k] = L[i];\n' +
                '            i++;\n' +
                '        }\n' +
                '        else\n' +
                '        {\n' +
                '            arr[k] = R[j];\n' +
                '            j++;\n' +
                '        }\n' +
                '        k++;\n' +
                '    }\n' +
                '    while (i < n1)\n' +
                '    {\n' +
                '        arr[k] = L[i];\n' +
                '        i++;\n' +
                '        k++;\n' +
                '    }\n' +
                '    while (j < n2)\n' +
                '    {\n' +
                '        arr[k] = R[j];\n' +
                '        j++;\n' +
                '        k++;\n' +
                '    }\n' +
                '}\n\n' +
                '// Main function that sorts arr[l..r] using merge()\n' +
                'void sort(int[] arr, int l, int r)\n' +
                '{\n' +
                '    if (l < r)\n' +
                '    {\n' +
                '        // Find the middle point\n' +
                '        int m = l + (r - l) / 2;\n' +
                '        // Sort first and second halves\n' +
                '        sort(arr, l, m);\n' +
                '        sort(arr, m + 1, r);\n' +
                '        // Merge the sorted halves\n' +
                '        merge(arr, l, m, r);\n' +
                '    }\n' +
                '}\n\n' +
                '// A utility function to print array of size n\n' +
                'static void printArray(int[] arr)\n' +
                '{\n' +
                '    int n = arr.Length;\n' +
                '    for (int i = 0; i < n; ++i)\n' +
                '        Console.Write(arr[i] + " ");\n' +
                '    Console.WriteLine();\n' +
                '}\n\n' +
                '// Driver method\n' +
                'public static void Main()\n' +
                '{\n' +
                '    int[] arr = { 12, 11, 13, 5, 6, 7 };\n' +
                '    Console.WriteLine("Given array");\n' +
                '    printArray(arr);\n' +
                '    MergeSort ob = new MergeSort();\n' +
                '    ob.sort(arr, 0, arr.Length - 1);\n' +
                '    Console.WriteLine("Sorted array");\n' +
                '    printArray(arr);\n' +
                '}\n}';

        case 'breadthFirstSearch(BFS)':
            return 'using System;\nusing System.Collections.Generic;\n\npublic class BFS\n{\n    private static void BreadthFirstSearch(List<int>[] graph, int startVertex)\n    {\n        bool[] visited = new bool[graph.Length];\n        Queue<int> queue = new Queue<int>();\n\n        visited[startVertex] = true;\n        queue.Enqueue(startVertex);\n\n        while (queue.Count != 0)\n        {\n            startVertex = queue.Dequeue();\n            Console.Write(startVertex + " ");\n\n            foreach (var neighbor in graph[startVertex])\n            {\n                if (!visited[neighbor])\n                {\n                    visited[neighbor] = true;\n                    queue.Enqueue(neighbor);\n                }\n            }\n        }\n    }\n\n    public static void Main()\n    {\n        int vertices = 5;\n        List<int>[] graph = new List<int>[vertices];\n\n        for (int i = 0; i < vertices; i++)\n        {\n            graph[i] = new List<int>();\n        }\n\n        // Add your graph edges here\n        graph[0].Add(1);\n        graph[0].Add(2);\n        graph[1].Add(2);\n        graph[2].Add(0);\n        graph[2].Add(3);\n        graph[3].Add(3);\n\n        Console.WriteLine("Breadth-First Traversal (starting from vertex 2):");\n        BreadthFirstSearch(graph, 2);\n    }\n}';


        default:
            return 'Invalid code snippet for C#';
    }
}
